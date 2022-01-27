# Compile Miko Template - Requirements: miko-tpl

from os import listdir

from miko import Manager


manager = Manager()


for file_name in listdir("./"):
    if file_name.endswith(".miko"):
        with open(f"docs/{file_name[:-5]}.html", "w") as f:
            f.write(manager.render(file_name))