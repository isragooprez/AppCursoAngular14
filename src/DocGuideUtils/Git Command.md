______________________________________________________________________________________________
GIT
______________________________________________________________________________________________

- git status
- git add .
- git commit -m
- git push
- git log --all --decorate --oneline --graph
- git log --graph --decorate --pretty=oneline --abbrev-commit
- git log --pretty=format:'%C(yellow)%h %Cred%ad %an%Cgreen%d %Creset%s' --date=short --graph

# EFECTUAR CAMBIOS
Revisa las ediciones y elabora una transacción de commit
$ git status
Enumera todos los archivos nuevos o modificados que se deben confirmar
$ git add [file]
Toma una instantánea del archivo para preparar la versión
$ git reset [file]
Mueve el archivo del área de espera, pero preserva su contenido
$ git diff
Muestra las diferencias de archivos que no se han enviado aún al
área de espera
$ git diff --staged
Muestra las diferencias del archivo entre el área de espera y la última
versión del archivo
$ git commit -m "[descriptive message]"
Registra las instantáneas del archivo permanentemente en
el historial de versión
CAMBIOS GRUPALES
Nombra una serie de commits y combina esfuerzos ya culminados

$ git branch #Enumera todas las ramas en el repositorio actual
$ git branch [branch-name] #Crea una nueva rama
$ git checkout [branch-name] #Cambia a la rama especificada y actualiza el directorio activo
$ git merge [branch] #Combina el historial de la rama especificada con la rama actual
$ git branch -d [branch-name] #Borra la rama especificada

NOMBRES DEL ARCHIVO DE REFACTORIZACIÓN
Reubica y retira los archivos con versión
$ git rm --cached [file] #Retira el archivo del control de versiones, pero preserva el archivo a
nivel local
$ git rm [file] # Borra el archivo del directorio activo y pone en el área de espera el
archivo borrado
$ git mv [file-original] [file-renamed] # Cambia el nombre del archivo y lo prepara para commit
SUPRIMIR TRACKING
Excluye los archivos temporales y las rutas
$ git ls-files --other --ignored --exclude-standard
Enumera todos los archivos ignorados en este proyecto
*.log
build/
temp-*
Un archivo de texto llamado .gitignore suprime la creación accidental de versiones de archivos y rutas que concuerdan con los patrones
especificados
GUARDAR FRAGMENTOS
Almacena y restaura cambios incompletos
$ git stash # Almacena temporalmente todos los archivos tracked modificados
$ git stash list # Enumera todos los sets de cambios en guardado rápido
$ git stash pop # Restaura los archivos guardados más recientemente
$ git stash drop # Elimina el set de cambios en guardado rápido más reciente
REPASAR HISTORIAL
Navega e inspecciona la evolución de los archivos de proyecto
$ git log # Enumera el historial de la versión para la rama actual
$ git log --follow [file] # Enumera el historial de versión para el archivo, incluidos los cambios
de nombre
$ git diff [first-branch]...[second-branch] # Muestra las diferencias de contenido entre dos ramas
$ git show [commit] # Produce metadatos y cambios de contenido del commit especificado
REHACER COMMITS
Borra errores y elabora historial de reemplazo
$ git reset [commit]  # Deshace todos los commits después de [commit], preservando los
cambios localmente
$ git reset --hard [commit]  # Desecha todo el historial y regresa al commit especificado
SINCRONIZAR CAMBIOS
Registrar un marcador de repositorio e intercambiar historial de versión
$ git fetch [bookmark] # Descarga todo el historial del marcador del repositorio
$ git merge [bookmark]/[branch] # Combina la rama del marcador con la rama local actual
$ git push [alias] [branch] # Carga todos los commits de la rama local al GitHub
$ git pull # Descarga el historial del marcador e incorpora cambios
CONFIGURAR HERRAMIENTAS
Configura la información del usuario para todos los respositorios locales
$ git config --global user.name "[name]"
Establece el nombre que desea esté anexado a sus transacciones
de commit
$ git config --global user.email "[email address]"
Establece el e-mail que desea esté anexado a sus transacciones de commit
$ git config --global color.ui auto
Habilita la útil colorización del producto de la línea de comando
CREAR REPOSITORIOS
Inicia un nuevo repositorio u obtiene uno de una URL existente
$ git init [project-name] # Crea un nuevo repositorio local con el nombre especificado
$ git clone [url] # Descarga un proyecto y toda su historia de versión


Cleaning up messes in Git
git status before git add . and git commit -m "..."
git diff before git add . and git diff --staged before git commit -m "..."
Wipe directory and return to latest commit.
git status # Check to see what we are about to discard.
git reset --hard
git clean -dfxn # Check what the next command will delete before running it.
git clean -dfx

# -n to check if you want to remove those files, e.g. git clean -ndfx
# -f: force: You MUST use this option to get ANY files deleted by this command
# (It's required for safety)
# -d: delete directories;
# -x: delete even .gitignored files (which are, of course, not backed up by git)

Individual files
In this section, we undo a git procedure one file at a time.

git reset <filename> # Undoes git add <filename> (Take file out of index without changing
# the contents of the file in the working directory)
# Note that git reset CAN edit much more than one file if you use different arguments such
# as git reset . or git reset --hard HEAD
git checkout -- <filename> # Undoes edits to a file that is not yet staged for commit.
# Note that the -- line helps to distinguish the filename from other git words like origin or master,
# just in case the file is called that.  See what happens if you type git checkout -- and hit
# tab: It tells you the special names in this context.
rm <filename> # Removes a file that has never been staged for commit.  Such a file is not in the index,
# so you can't check it out with git checkout -- <filename>. Here we are using a basic shell command
# to delete the file instead of a git command since git doesn't know anything about the file.

All files
In this section, we undo a git procedure for the entire working directory. To do this, you must run these commands from the topmost folder within your .git project. Some of the commands (e.g., clean) only work from the current directory and its sub-directories. [4]

git reset # Undoes git add for all files in the entire working directory
git checkout -- . # Undoes edits to all files in the current folder and its subfolders (but not any folders above it in the working directory.)
git reset --hard HEAD # Undoes both edits and add.
git clean -dfx # removes all working directory files that are UNTRACKED in the current folder and its subfolders. These are files that are in the working directory, but are not checked in and have not been added to the index yet. Note that -x means to also remove ignored files!


Whole commits
All the commands we have looked at so far deal with resetting the working directory and the index. But what if you have already committed the files?

This is the best command for “rolling back” to a previous version when things have already been pushed to master:

git revert 0737a # Create a new commit that reverses the effect of previous commits to bring you back to an older commit.

This command creates a new commit that undoes all the changes, restoring the state of the selected commit. The random numbers 0727a are the first few digits of the whole commit hash (e.g, 0737abe3131037765d4806fd6ec5f6353d755c28). You only need to type enough to make the hash unique.

Exhaustive reset to origin/master script

The two commands in the section on wiping your working directory and going back to the latest commit will restore things back to your latest local commit. This script does the equivalent of cloning the repository freshly from the remote repository. But be warned: Unlike the xkcd approach, this will delete all your changes in the local working directory, and may even discard local commits!

git status # Check to see what we are about to DISCARD
git reset --hard HEAD # wipe out working directory and index (except untracked files)
git clean -ndfx # Check to see what we are about to delete.
git clean -dfx # Delete untracked files and directories in the working directory (and perhaps tracked ones as well)
# Or git clean -dffx
# -ff makes the force more forceful (removes untracked directories that appear to be managed by a different git repository

git checkout master # Move to the master branch
git fetch origin master # Pull from master without touching index or working directory
git reset --hard origin/master # Replace your current branch with origin/master. This MAY discard local commmits!
git pull # One final pull from master (maybe just to make sure we're up-to-date a few commands later?)
git status # See how things look. Hopefully clean now!

