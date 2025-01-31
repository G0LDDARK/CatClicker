# CatClicker
<img src="assets/pastle_cat.png" alt="The cute cat you should click on!"> <br>
CatClicker is a cookie clicker-like game, but it's cats and coded in TypeSrcipt / HTML / CSS <br>
Last "playable" update can be played at https://catclicker.glddrk.fr <br>
Thanks for playing and enjoy!

## Usage
### Build and start locally
``` npm run build ``` <br>
``` npm run start ```
### Build and run on server
``` npm run build ``` <br>
``` cp index.html /path/to/the/server ``` <br>
``` cp src/* /path/to/the/server ```

## Changelog:

### 0.0.4 (31 JAN 25)
#### Major changes:
- Switching to TypeScript

### 0.0.3 (30 JAN 25)
#### Major changes:
- Refactorisation
    - Created buy function to have a reusable function
    - Changed img name

- Removed little anti-cheat
    - Would probably never be brought back up

### 0.0.2 (09 NOV 24)
#### Major changes:
- Adding "cuddle" item: gives LP per second
    - LVL 1 price: 50 LP,
    - LVL 1 LP/s: 1 LP/s.

- Adding a little anti-cheat:
    - Detecting when a value is changed to negative.

- Changing prices factor.

#### Minor changes:
- Some code refactoring all around the project.
- Starting with 10 LP instead of 1.
