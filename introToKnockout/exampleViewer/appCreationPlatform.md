8/11/2013

# An Application Authoring Platform

The following tasks are necessary to author an app:

 * write the code
 * establish a back end for persistence
 * publish the code
 * share the code

All these activities can be performed in the browser today. For example, GitHub Pages, Cloud9 IDE, and FireBase are browser-based services that can be used in conjunction to publish full-stack Web apps. Even though this process is possible through the browser today, people who are not computer programmers would not be able to navigate the technology on their own. In addition, versioning logic must be dealt with properly for published apps not to break. The process of Web-based app authorship can be simplified.

The model for such a system may look like this:

 * User - the entity that corresponds to people and enables login
 * App - a "Web App"
   * created by and owned by a user
   * each App has many Versions
 * Version - a fixed snapshot of the App code
   * a Version has many states
 * State - a state of a session that a user has started within a particular Version
   * each State is created by a user
   * each State is part of a State History, which is a tree structure

The Data Model for such a system might look like this:

 * User
   * name
   * email
   * apps
   * states
 * App
   * user (the creator and owner)
   * name
   * description
   * code (a set of files)
   * versions
 * Version
   * user (the author)
   * app (the app that this version belongs to)
   * code (a set of files)

What is the best backend implementation? Options include:

 * Purely MongoDB
 * MongoDB and the file system
 * MongoDB and Git

Best = the one that can be implemented as simply as possible.

Standards for Open Source JavaScript Libraries

 * Code in GitHub
 * Reasonable documentation in the README
 * Production releases are hosted somewhere for direct use (e.g. a Content Distribution Network or in through GitHub Pages).
