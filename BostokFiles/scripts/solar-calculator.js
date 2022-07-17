// Equations based on NOAA’s Solar Calculator; all angles in radians.
// http://www.esrl.noaa.gov/gmd/grad/solcalc/

(function() {
  var J2000 = Date.UTC(2000, 0, 1, 12),
      π = Math.PI,
      τ = 2 * π,
      radians = π / 180,
      degrees = 180 / π;

  solarCalculator = function(location) {
    var longitude = location[0],
        minutesOffset = 720 - longitude * 4,
        λ = location[0] * radians,
        φ = location[1] * radians,
        cosφ = Math.cos(φ),
        sinφ = Math.sin(φ);

    function position(date) {
      var centuries = (date - J2000) / (864e5 * 36525),
          θ = solarDeclination(centuries),
          cosθ = Math.cos(θ),
          sinθ = Math.sin(θ),
          azimuth = ((date - d3.time.day.utc.floor(date)) / 864e5 * τ + equationOfTime(centuries) + λ) % τ - π,
          zenith = Math.acos(Math.max(-1, Math.min(1, sinφ * sinθ + cosφ * cosθ * Math.cos(azimuth)))),
          azimuthDenominator = cosφ * Math.sin(zenith);

      if (azimuth < -π) azimuth += τ;
      if (Math.abs(azimuthDenominator) > 1e-6) azimuth = (azimuth > 0 ? -1 : 1) * (π - Math.acos(Math.max(-1, Math.min(1, (sinφ * Math.cos(zenith) - sinθ) / azimuthDenominator))));
      if (azimuth < 0) azimuth += τ;

      // Correct for atmospheric refraction.
      var atmosphere = 90 - zenith * degrees;
      if (atmosphere <= 85) {
        var te = Math.tan(atmosphere * radians);
        zenith -= (atmosphere > 5 ? 58.1 / te - .07 / (te * te * te) + .000086 / (te * te * te * te * te)
            : atmosphere > -.575 ? 1735 + atmosphere * (-518.2 + atmosphere * (103.4 + atmosphere * (-12.79 + atmosphere * .711)))
            : -20.774 / te) / 3600 * radians;
      }

      // Note: if zenith > 108°, it’s dark.
      return [azimuth * degrees, 90 - zenith * degrees];
    }

    function noon(date) {
      var centuries = (d3.time.day.utc.floor(date) - J2000) / (864e5 * 36525),
          minutes = (minutesOffset - (equationOfTime(centuries + (minutesOffset - (equationOfTime(centuries - longitude / (360 * 365.25 * 100)) * degrees * 4)) / (1440 * 365.25 * 100)) * degrees * 4) - date.getTimezoneOffset()) % 1440;
      if (minutes < 0) minutes += 1440;
      return new Date(+d3.time.day.floor(date) + minutes * 60 * 1000);
    }

    return {
      position: position,
      noon: noon
    };
  };

  function equationOfTime(centuries) {
    var e = eccentricityEarthOrbit(centuries),
        m = solarGeometricMeanAnomaly(centuries),
        l = solarGeometricMeanLongitude(centuries),
        y = Math.tan(obliquityCorrection(centuries) / 2);
    y *= y;
    return y * Math.sin(2 * l)
        - 2 * e * Math.sin(m)
        + 4 * e * y * Math.sin(m) * Math.cos(2 * l)
        - 0.5 * y * y * Math.sin(4 * l)
        - 1.25 * e * e * Math.sin(2 * m);
  }

  function solarDeclination(centuries) {
    return Math.asin(Math.sin(obliquityCorrection(centuries)) * Math.sin(solarApparentLongitude(centuries)));
  }

  function solarApparentLongitude(centuries) {
    return solarTrueLongitude(centuries) - (0.00569 + 0.00478 * Math.sin((125.04 - 1934.136 * centuries) * radians)) * radians;
  }

  function solarTrueLongitude(centuries) {
    return solarGeometricMeanLongitude(centuries) + solarEquationOfCenter(centuries);
  }

  function solarGeometricMeanAnomaly(centuries) {
    return (357.52911 + centuries * (35999.05029 - 0.0001537 * centuries)) * radians;
  }

  function solarGeometricMeanLongitude(centuries) {
    var l = (280.46646 + centuries * (36000.76983 + centuries * 0.0003032)) % 360;
    return (l < 0 ? l + 360 : l) / 180 * π;
  }

  function solarEquationOfCenter(centuries) {
    var m = solarGeometricMeanAnomaly(centuries);
    return (Math.sin(m) * (1.914602 - centuries * (0.004817 + 0.000014 * centuries))
        + Math.sin(m + m) * (0.019993 - 0.000101 * centuries)
        + Math.sin(m + m + m) * 0.000289) * radians;
  }

  function obliquityCorrection(centuries) {
    return meanObliquityOfEcliptic(centuries) + 0.00256 * Math.cos((125.04 - 1934.136 * centuries) * radians) * radians;
  }

  function meanObliquityOfEcliptic(centuries) {
    return (23 + (26 + (21.448 - centuries * (46.8150 + centuries * (0.00059 - centuries * 0.001813))) / 60) / 60) * radians;
  }

  function eccentricityEarthOrbit(centuries) {
    return 0.016708634 - centuries * (0.000042037 + 0.0000001267 * centuries);
  }
})();
