Resources from a tutorial given by Curran Kelleher at UMass Lowell on 2/21/2014 as part of the Computing II C programming lab.

## Vim and Unix Commands Reference


Vim and Unix Commands:

 * ls - list files
 * mkdir - makes a directory
 * cd - changes directory
 * pwd - present working directory
 * cd .. or cd ../ - navigate to parent
 * curl -O http://curran.github.io/data/uci_ml/iris/iris.csv - fetches the content of a URL
 * CTRL+a - move to beginning of line
 * CTRL+e - move to end of line
 * up arrow - navigate previous commands
 * clear - clears the console
 * history - list previous commands
 * vimtutor - the VIM quick start tutorial
 * vim <file> - open file
 * :q - close vim
 * :q! - close vim without saving the file
 * :w - save
 * :wq - save and close
 * hjkl - move 1 character
 * CTRL+d - move down by half a page
 * CTRL+u - move up by half a page
 * gg - go to the top of the file
 * G - go to the bottom of the file
 * ! - run shell command
 * / - search
 * n - "next" search result
 * i - insert mode
 * ESC - go back to normal mode
 * v - visual mode
 * V - visual line mode
 * \< - unindent
 * \> - indent
 * CTRL+V - visual block mode (SUPER USEFUL)
   * I - insert at selected block (e.g. commenting out multiple lines)
   * d - delete selected block
 * u - undo
 * y - copy (y stands for "yank")
 * p - paste
 * dd - delete line
 * d - deletes selection
 * x - deletes one character
 * J - join lines
 * r - replace character
 * :sp <filename> - split window
 * :vs <filename> - split window vertical
 * CTRL+w j - go down a window
 * CTRL+w k - go up a window
 * CTRL+w l - go left a window
 * CTRL+w h - go left a window
 * $ - go to line end
 * 0 - go to beginning of line
 * :wa - write all files
 * % - match curly brace or paren
 * :r !<shell command> - execute a shell command and read the content into the file
 * :r !ls - read `ls` into the file
 * :%/s/A/B/g - replace all occurences of A with B
 * qq - record macro at 'q'
 * @q - run macro at 'q'
 * @@ - run previous macro
 * 99@@ - run previous macro 99 times 
 * 118G - go to line 118
 * :echo @% - show current file
 * :set nu (short form of :set number) - show line numbers
 * :set nu! - toggle line numbers on and off
