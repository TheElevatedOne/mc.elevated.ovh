import os.path as op
import argparse
import glob
import zipfile
import io
import tomllib
import base64
import json


class getMods():
    def __init__(self):
        self.path = self.parse().path
        self.files = self.get_files(self.path)
        self.dict = {}
        self.get_data(self.files)
        self.save_data(self.dict)

    def parse(self):
        parser = argparse.ArgumentParser()
        parser.add_argument("-p", "--path", help="Path to the Minecraft mods directory, can be relative.")
        return parser.parse_args()
    
    def get_files(self, path):
        files = glob.glob(op.join(path, "*.jar"))
        files.sort()
        return files

    def get_data(self, files):
        for i in files:
            basename = op.basename(i)
            archive = zipfile.ZipFile(i, "r")
            
            infolist = archive.infolist()
            logo = ""
            for f in infolist:
                if f.filename == "META-INF/mods.toml":
                    with io.TextIOWrapper(archive.open(f.filename), encoding="utf-8") as f:
                        toml = tomllib.loads(f.read())
                        mod = toml["mods"][0]
                        f.close()
                        try:
                            logo = mod["logoFile"]
                            b_logo = io.BytesIO(archive.read(logo))
                            b64 = base64.b64encode(b_logo.getvalue())
                            mod["logoFile"] = b64.decode()
                            self.dict[basename] = dict(mod)
                        except:
                            self.dict[basename] = dict(mod)

    def save_data(self, dict):
        with open("data.js", "w") as f:
            json.dump(dict, f)

if __name__ == "__main__":
    getMods()