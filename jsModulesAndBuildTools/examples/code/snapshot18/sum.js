import reduce from "./reduce";
import add from "./add";
export default function sum(list){
  return reduce(list, add, 0);
}
