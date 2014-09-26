# Introduction to GitHub

This screencast covers:

 * [Git](http://en.wikipedia.org/wiki/Git_(software))
   * [Revision Control](http://en.wikipedia.org/wiki/Revision_control)
   * [Comparison of revision control software](http://en.wikipedia.org/wiki/Comparison_of_revision_control_software)
 * [GitHub](http://en.wikipedia.org/wiki/GitHub)
   * [github.com](https://github.com/)
 * [GitHub Pages](https://pages.github.com/)

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
 * `git pull` Pulls the remote changes from GitHub down to your computer. Shorthand for
   * `git fetch` gets the changes from GitHub to your computer, but does not change the files you see
   * `git merge origin/master` merges the remote changes into the files you see
 * `git branch` Lists branches and shows the currently checked out branch
   * `git branch <new branch name>` Creates a new branch
   * `git branch -d <new branch name>` Deletes a branch
 * `git checkout <branch name goes here>` Checks out a branch
   * `git checkout -b <new branch name>` Creates and checks out a branch

## Using GitHub Pages

 * Make a new branch called `gh-pages` using either of the following:
   * `git branch gh-pages; git checkout gh-pages`
   * `git checkout -b gh-pages`
 * Push the `gh-pages` branch to GitHub using:
   * `git push origin gh-pages`
 * Access the page at `http://<user name>.github.io/<repository name>/`
   * e.g. [http://curran.github.io/myPage](http://curran.github.io/myPage)
 
Below are links to specific times in the video that explain each step.

*   [Creating a new repository in GitHub](http://youtu.be/Q6HbQRWAMM4?t=2m2s)
*   [Install Git on your system](http://youtu.be/Q6HbQRWAMM4?t=4m50s)
*   [Setting up SSH keys](http://youtu.be/Q6HbQRWAMM4?t=5m56s)&nbsp;(you don't need to do this if you use the HTTPs protocol rather than SSH, but with HTTPS you'll need to enter your user name and password each time you push)
*   [Cloning a repository](http://youtu.be/Q6HbQRWAMM4?t=9m35s)
*   [Using git status](http://youtu.be/Q6HbQRWAMM4?t=10m32s)
*   [Using git add](http://youtu.be/Q6HbQRWAMM4?t=10m56s)
*   [Committing files](http://youtu.be/Q6HbQRWAMM4?t=11m7s)
*   [Configuring your user name and email with Git](http://youtu.be/Q6HbQRWAMM4?t=11m39s)
*   [Pushing changes to GitHub](http://youtu.be/Q6HbQRWAMM4?t=12m57s)
*   [GitHub Pages](http://youtu.be/Q6HbQRWAMM4?t=16m56s)
*   [Creating the gh-pages branch](http://youtu.be/Q6HbQRWAMM4?t=17m36s)
*   [Checking out the gh-pages branch](http://youtu.be/Q6HbQRWAMM4?t=18m7s)
*   [Pushing the gh-pages branch to GitHub](http://youtu.be/Q6HbQRWAMM4?t=19m58s)
*   [Adding an index.html file](http://youtu.be/Q6HbQRWAMM4?t=22m24s)
*   [Updating index.html and adding a JavaScript file (full Git workflow cycle)](http://youtu.be/Q6HbQRWAMM4?t=27m25s)


[Mind Blown Gif](http://mindblowngifs.tumblr.com/post/32712441400) used in video.

Curran Kelleher, 9/9/2014
