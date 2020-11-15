# Botpress Extended Skills

Includes some utilities to support you creating innovative chatbots also with community edition.

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.
**Please ensure to install the required Node.js version defined by [botpress](https://github.com/botpress/botpress)**

### Node
- #### Node installation on Windows

   Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

  ```bash
  $ sudo apt install nodejs
  $ sudo apt install npm
  ```

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

  If the installation was successful, you should be able to run the following command.

  ```
  $ node --version
  v12.18.4

  $ npm --version
  npm@6.14.6
  ```

  If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

  ```bash
  $ npm install npm -g
  ```

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.
```bash
$ npm install -g yarn
```
---

## Build the module

#### Clone botpress
Because this is only a [custom module](https://botpress.com/docs/advanced/custom-module), we first need to clone the botpress repository. We need the original repo for building the module.

```
$ git clone https://github.com/botpress/botpress.git
$ cd botpress
```

#### Clone bs-utility module

To build the custom module, please clone the repository into the `./modules/` directory from your existing botpress repo.

After cloning and run `install` all the mandatory files for buidling are loaded.

```bash
$ cd botpress/modules/
$ git clone https://github.com/whati001/bs-utility.git
$ cd bs-utility
$ yarn install
```

#### Build the module
```bash
$ cd botpress/modules/bs-utility/
$ yarn build
```