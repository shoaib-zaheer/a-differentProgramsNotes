
**`$ git add .`**

**`$ git status`**

**`$ git commit -m "Update"`**

**`$ git fetch origin`**  > // this going to bring the origin file from **GETHUB**

**`$ git status`**     > // now it will show to you if origin and your file have any change.

> Note: if we use `$ git pull` here the system will ask for pull and git merge at same time which end up without knowing in to conflict.


**`$ git merge origin/master`**

You might see a conflict in here,
if so you have to open the files and solve the conflict and then push.

**`$ git log`** // to check commit in repo.

**`$ git log`** —online // to check repo commit in one line.

**`$ git checkout 2d63d7`** // to see the specific commit change.

**`$ git revert 2d63d7`** // to undo a commit in repo.
