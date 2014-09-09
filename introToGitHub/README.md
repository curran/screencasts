# Introduction to GitHub

 * [Git](http://en.wikipedia.org/wiki/Git_(software))
 * [Revision Control](http://en.wikipedia.org/wiki/Revision_control)
 * [Comparison of revision control software](http://en.wikipedia.org/wiki/Comparison_of_revision_control_software)
 * [GitHub](http://en.wikipedia.org/wiki/GitHub)
 * [github.com](https://github.com/)

## Commands

 * `git clone <repository address goes here>` Creates a local copy of the repository
 * `git status` Tells you which files have changed
   * `git status -s` A "short" version of `git status` that is more concise
 * `git log` Shows the log of commits with their messages, dates and users
 * `git add <file name goes here>` Adds a file or directory to the set of changes that will be applied when you commit
 * `git commit -m "<Your message goes here>"` Commits the changes you have added so far to your local repository (on your computer)
   * `git commit -m "<Your message goes here>" -a` The `-a` option automatically adds all modified files. This is equivalent to first invoking `git add` for each changed file, then committing.
 * `git push` Pushes your local commits to GitHub, making GitHub contain the same changed files that are on your computer
   * `git push origin master` The full form of `git push` that is assumed. `origin` refers to GitHub, and `master` refers to the master branch (the default main branch that is automatically created with the repository).
 * `git pull` Pulls the remote changes from GitHub down to your computer
   * `git pull` is actually a shorthand for the folliwing commands:
   * `git fetch` gets the changes from GitHub to your computer, but does not change the files you see on your system
   * `git merge origin/master` merges the remote changes into the files you see on your system

## Using GitHub Pages

 * Make a new branch called `gh-pages` using either of the following:
   * `git branch gh-pages; git checkout gh-pages`
   * `git checkout -b gh-pages`
 * Push the `gh-pages` branch to GitHub using:
   * `git push origin gh-pages`
 * Access the page at `http://<user name>.github.io/<repository name>/`
   * e.g. [http://curran.github.io/myPage](http://curran.github.io/myPage)

Curran Kelleher, 9/9/2014
