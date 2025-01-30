namespace SpriteKind {
    export const Structure = SpriteKind.create()
    export const textSprites = SpriteKind.create()
    export const Woodythings = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    jump = false
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(inInventory) && Player_character.isHittingTile(CollisionDirection.Bottom)) {
        Player_character.vy = -50
        jump = true
    } else if (Player_character.isHittingTile(CollisionDirection.Top)) {
    	
    } else {
    	
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player_character.overlapsWith(Base)) {
        gotoBase(true)
    } else if (In_Base) {
        gotoBase(false)
    } else {
    	
    }
})
function BlockBreak (col: number, row: number, block: number, miningSpeed: number) {
    if (block == 0) {
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile13`)
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile14`)
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile15`)
        pause(miningSpeed)
    } else if (Type_of_block_being_mined == 1) {
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile22`)
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile23`)
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile24`)
        pause(miningSpeed)
    } else if (Type_of_block_being_mined == 2) {
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile13`)
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile14`)
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile15`)
        pause(miningSpeed)
    } else if (Type_of_block_being_mined == 3) {
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile13`)
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile14`)
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile15`)
        pause(miningSpeed)
    } else if (Type_of_block_being_mined == 4) {
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile13`)
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile14`)
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile15`)
        pause(miningSpeed)
    } else if (Type_of_block_being_mined == 5) {
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile13`)
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile14`)
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile15`)
        pause(miningSpeed)
    } else if (Type_of_block_being_mined == 6) {
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile13`)
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile14`)
        pause(miningSpeed)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile15`)
        pause(miningSpeed)
    } else if (false) {
    	
    } else {
    	
    }
    tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile8`)
    tiles.setWallAt(tiles.getTileLocation(col, row), false)
}
function gotoBase (goto: boolean) {
    if (goto) {
        Gravity = 0
        In_Base = goto
        saveTilemap()
        tiles.setCurrentTilemap(tilemap`Inside Base`)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        tiles.placeOnTile(Player_character, tiles.getTileLocation(3, 26))
        previousTilemap = 0
        Player_character.setVelocity(0, 0)
        controller.moveSprite(Player_character, 50, 50)
    } else {
        Gravity = 0.8
        In_Base = goto
        tiles.setCurrentTilemap(tilemap`Planet part 1`)
        loadTilemap()
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
            ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
            fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
            fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
            fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
            ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
            f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
            ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
            ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
            fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
            fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
            ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
            fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
            fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
            ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff
            ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff
            fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf
            ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb
            bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
            bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
            bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
            bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
            3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
            333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
            cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
            cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
            cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
            cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
            bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
            bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
            dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
            dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
            dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
            ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
            ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
            ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
            ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
            d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
            333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
            33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
            33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
            d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
            ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
            b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
            bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
            bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
            b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
            dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd
            dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd
            dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd
            dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd
            3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333
            33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            `)
        tiles.placeOnTile(Player_character, tiles.getTileLocation(48, 13))
        controller.moveSprite(Player_character, 50, 0)
    }
}
function loadTilemap () {
    for (let value of minedLocations) {
        tiles.setTileAt(value, assets.tile`myTile8`)
        tiles.setWallAt(value, false)
    }
    for (let value of coalLocations) {
        tiles.setTileAt(value, assets.tile`Coal`)
    }
    for (let value of ironLocations) {
        tiles.setTileAt(value, assets.tile`Iron`)
    }
    for (let value of copperLocations) {
        tiles.setTileAt(value, assets.tile`Copper`)
    }
    for (let value of dirtLocations) {
        tiles.setTileAt(value, assets.tile`myTile3`)
    }
    for (let value of stoneLocations) {
        tiles.setTileAt(value, assets.tile`myTile3`)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function Ores () {
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        tempOreRandomizer = randint(1, 10)
        if (tempOreRandomizer > 5) {
            if (randint(0, 1) == 0) {
                tiles.setTileAt(value, assets.tile`Stone`)
            } else {
                tiles.setTileAt(value, assets.tile`Stone`)
            }
        } else {
            tiles.setTileAt(value, assets.tile`myTile3`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        tempOreRandomizer = randint(1, 200)
        if (tempOreRandomizer < 6) {
            tiles.setTileAt(value, assets.tile`Coal`)
        } else if (tempOreRandomizer < 10) {
            tiles.setTileAt(value, assets.tile`Copper`)
        } else if (tempOreRandomizer < 13) {
            tiles.setTileAt(value, assets.tile`Iron`)
        } else {
            tiles.setTileAt(value, assets.tile`Stone`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        tempOreRandomizer = randint(1, 300)
        if (tempOreRandomizer < 6) {
            tiles.setTileAt(value, assets.tile`Coal`)
        } else if (tempOreRandomizer < 10) {
            tiles.setTileAt(value, assets.tile`Copper`)
        } else if (tempOreRandomizer < 13) {
            tiles.setTileAt(value, assets.tile`Iron`)
        } else if (tempOreRandomizer < 16) {
            tiles.setTileAt(value, assets.tile`Diamonds`)
        } else if (tempOreRandomizer < 19) {
            tiles.setTileAt(value, assets.tile`myTile13`)
        } else if (tempOreRandomizer < 21) {
            tiles.setTileAt(value, assets.tile`myTile12`)
        } else {
            tiles.setTileAt(value, assets.tile`Stone`)
        }
    }
}
function Mine (direction_down__1_up__2_left__3_right__4: number, cooldown: number) {
    if (direction_down__1_up__2_left__3_right__4 == 1) {
        if (Player_character.tileKindAt(TileDirection.Bottom, assets.tile`Stone`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 0, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
        }
        if (Player_character.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 0, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 0
        }
        if (Player_character.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 1, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 1
        }
        if (Player_character.tileKindAt(TileDirection.Bottom, assets.tile`myTile1`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 2, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 2
        }
        if (Player_character.tileKindAt(TileDirection.Bottom, assets.tile`myTile2`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 3, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 3
        }
        if (Player_character.tileKindAt(TileDirection.Bottom, assets.tile`myTile4`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 4, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 4
        }
        if (Player_character.tileKindAt(TileDirection.Bottom, assets.tile`myTile3`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 5, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 5
        }
    } else if (direction_down__1_up__2_left__3_right__4 == 3) {
        if (Player_character.tileKindAt(TileDirection.Left, assets.tile`Stone`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 6, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 6
        }
        if (Player_character.tileKindAt(TileDirection.Left, assets.tile`myTile`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 0, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 0
        }
        if (Player_character.tileKindAt(TileDirection.Left, assets.tile`myTile0`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 1, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 1
        }
        if (Player_character.tileKindAt(TileDirection.Left, assets.tile`myTile1`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 2, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 2
        }
        if (Player_character.tileKindAt(TileDirection.Left, assets.tile`myTile2`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 3, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 3
        }
        if (Player_character.tileKindAt(TileDirection.Bottom, assets.tile`myTile4`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 4, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 4
        }
        if (Player_character.tileKindAt(TileDirection.Left, assets.tile`myTile3`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 5, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 5
        }
    } else if (direction_down__1_up__2_left__3_right__4 == 4) {
        if (Player_character.tileKindAt(TileDirection.Right, assets.tile`Stone`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 1, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 6
        }
        if (Player_character.tileKindAt(TileDirection.Right, assets.tile`myTile`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 0, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 0
        }
        if (Player_character.tileKindAt(TileDirection.Right, assets.tile`myTile0`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 1, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 1
        }
        if (Player_character.tileKindAt(TileDirection.Right, assets.tile`myTile1`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 2, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 2
        }
        if (Player_character.tileKindAt(TileDirection.Right, assets.tile`myTile2`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 0, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 3
        }
        if (Player_character.tileKindAt(TileDirection.Right, assets.tile`myTile4`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 4, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 4
        }
        if (Player_character.tileKindAt(TileDirection.Right, assets.tile`myTile3`)) {
            whereToBreakCol = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).column
            whereToBreakRow = Player_character.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).row
            BlockBreak(whereToBreakCol, whereToBreakRow, 1, cooldown)
            inventory.change_number(InventoryNumberAttribute.SelectedIndex, 0)
            Type_of_block_being_mined = 5
        }
    } else {
    	
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inInventory) {
        inventory.change_number(InventoryNumberAttribute.SelectedIndex, -1)
    } else {
        Mine(3, miningEfficiency)
    }
})
function saveTilemap () {
    minedLocations = tiles.getTilesByType(assets.tile`myTile8`)
    coalLocations = tiles.getTilesByType(assets.tile`Coal`)
    ironLocations = tiles.getTilesByType(assets.tile`Iron`)
    copperLocations = tiles.getTilesByType(assets.tile`Copper`)
    dirtLocations = tiles.getTilesByType(assets.tile`myTile3`)
    stoneLocations = tiles.getTilesByType(assets.tile`Stone`)
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (!(inInventory)) {
        activateInventory(true)
    } else {
        activateInventory(false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    Player_character.setImage(img`
        . . . . . . f f . . . . . . . . 
        . . . . . f 1 1 f . . . . . . . 
        . . . . . f 1 1 f . . . . . . . 
        . . . . . f 1 1 f . . . . . . . 
        . . . . . f 1 1 f . . . . . . . 
        . f f f . f 1 1 f . . . . . . . 
        . f 1 1 f f 1 1 f f f . . . . . 
        . f 1 1 1 f 1 1 1 1 f f f f . . 
        . . f 1 1 f 1 1 1 1 1 1 1 f f f 
        . . . f 1 1 1 1 1 1 1 1 1 1 1 f 
        . . . f 1 1 1 1 1 1 1 1 1 1 1 f 
        . . . . f 1 1 1 1 1 1 1 1 1 f . 
        . . . . f 1 1 1 1 1 1 1 1 1 f . 
        . . . . . f 1 1 1 1 1 1 1 f . . 
        . . . . . f 1 1 1 1 1 1 1 f . . 
        . . . . . . f f f f f f f . . . 
        `)
    Gravity = 0
    tiles.setCurrentTilemap(tilemap`Upgrades`)
    tiles.placeOnTile(Player_character, tiles.getTileLocation(7, 3))
    Player_character.setVelocity(0, 0)
    controller.moveSprite(Player_character, 50, 50)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inInventory) {
        inventory.change_number(InventoryNumberAttribute.SelectedIndex, 1)
    } else {
        Mine(4, miningEfficiency)
    }
})
function GROWTrees () {
    for (let value of tiles.getTilesByType(assets.tile`myTile26`)) {
        Tree = sprites.create(img`
            ...........66...........
            ..........6776..........
            ..........6776..........
            .........877778.........
            ........86777768........
            .......6777777776.......
            ......677677776776......
            ......866777777668......
            .....86677677677668.....
            ....8668866766888668....
            ....8888668886686888....
            .....86868868868668.....
            ....866888668888868.....
            ....8688886888888888....
            ....8886688888866888....
            ....8676888868886768....
            ...87778868678688776....
            ..8777767767787767778...
            .877767777777677776778..
            .8866777777777777776778.
            .8667776776767776777688.
            ..887766768668776667668.
            ..8688668886688686688668
            .86688688686866888688888
            8668868866888866888868..
            88886686688888868688668.
            .8688888888888888668868.
            .8878888868868878868788.
            .87768776788778777667788
            877677767787776767776778
            88877787766777777877788.
            ..88886786777667768888..
            .....86887786668868.....
            ......8886888668888.....
            .........88ee88.........
            .........feeeef.........
            .........feeeef.........
            ........feeefeef........
            ........fefeffef........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Woodythings)
        Tree_spawn_x = value.column
        Tree_spawn_y = value.row
        tiles.placeOnTile(Tree, tiles.getTileLocation(Tree_spawn_x, Tree_spawn_y))
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(inInventory) && Player_character.isHittingTile(CollisionDirection.Bottom)) {
        Mine(1, miningEfficiency)
    }
})
function createInventory () {
    dirt = Inventory.create_item("Dirt", assets.image`coal2Art`, "Dug up from the ground")
    coal = Inventory.create_item("Coal", img`
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b f f f b b b b b b b b b 
        b b b b f f f b b b b b b b b b 
        b b b b f f f b b b b b b b b b 
        b b b b b b b b b b f f f f b b 
        b b b b b b b b b b f f f f b b 
        b b b b b b f f b b f f f f b b 
        b b b b b b f f b b f f f f b b 
        b b b b b b f f b b f f f f b b 
        b b b b b b b b b b b b b b b b 
        b b f f f b b b b b b b b b b b 
        b b f f f b b b b b f f f f b b 
        b b b b b b b b b b f f f f b b 
        b b b b b b b b b b f f f f b b 
        b b b b b b b b b b b b b b b b 
        `, "Dug up from the ground")
    stone = Inventory.create_item("Stone", img`
        b b b b c c c b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b c c c c b b 
        b b c c b b b b b b b b b b b b 
        b b b c c c b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b c c b b b b b b b b b b b b 
        b b b b b b b b b c c c b b b b 
        b b b b b b b b b b b c c c b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b c c c c b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `, "Dug up from the ground")
    inventory = Inventory.create_inventory([dirt, stone, coal], 50)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Structure, function (sprite, otherSprite) {
    if (!(gto_base_said)) {
        game.splash("Press B to enter base")
        gto_base_said = true
    }
})
function activateInventory (goingIn: boolean) {
    if (goingIn) {
        controller.moveSprite(Player_character, 0, 0)
        createInventory()
        inventory.setStayInScreen(true)
        tiles.placeOnTile(inventory, Player_character.tilemapLocation())
        inInventory = true
    } else {
        sprites.destroy(inventory)
        inInventory = false
        controller.moveSprite(Player_character, 50, 0)
    }
}
let stone: Inventory.Item = null
let coal: Inventory.Item = null
let dirt: Inventory.Item = null
let Tree_spawn_y = 0
let Tree_spawn_x = 0
let Tree: Sprite = null
let inventory: Inventory.Inventory = null
let whereToBreakRow = 0
let whereToBreakCol = 0
let tempOreRandomizer = 0
let stoneLocations: tiles.Location[] = []
let dirtLocations: tiles.Location[] = []
let copperLocations: tiles.Location[] = []
let ironLocations: tiles.Location[] = []
let coalLocations: tiles.Location[] = []
let minedLocations: tiles.Location[] = []
let previousTilemap = 0
let Type_of_block_being_mined = 0
let miningEfficiency = 0
let inInventory = false
let gto_base_said = false
let jump = false
let Gravity = 0
let Player_character: Sprite = null
let Base: Sprite = null
let In_Base = false
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
    ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
    fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
    fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
    ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
    f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
    ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
    ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
    fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
    fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
    ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
    fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
    ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff
    ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff
    fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf
    ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
    bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
    bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
    bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
    3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
    333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
    cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
    cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
    cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
    bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
    bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
    dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
    dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
    dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
    ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
    ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
    ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
    ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
    d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
    333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
    33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
    33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
    d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
    ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
    b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
    bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
    bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
    b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
    dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd
    dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd
    dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd
    dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd
    3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333
    33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    `)
tiles.setCurrentTilemap(tilemap`Planet part 1`)
In_Base = false
Base = sprites.create(img`
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ..................................................................fffffffff.....................
    ................................................................ff888888888ff...................
    ...............................................................f8888888888888f..................
    ..............................................................f888888888888888f.................
    .............................................................f88888888888888888f................
    ............................................................f8888888888888888888f...............
    ............................................................f8888888888888888888f...............
    ...........................................................f888888888888888888888f..............
    ...........................................................f888888888888888888888f..............
    ...........................................................f888888888888888888888f..............
    ...........................................................f888888888888888888888f..............
    ...........................................................f888888888888888888888f..............
    ...........................................................f888888888888888888888f..............
    ...........................................................f888888888888888888888f..............
    ......ffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888fffffff........
    ......f1111111111111111111111111111111111111111111111111111f888888888888888888888f11111f........
    ......f11111111111111111111111111111111111111111111111111111f8888888888888888888f111111f........
    ......f11111111111111111111111111111111111111111111111111111f8888888888888888888f111111f........
    ......f111111111111111111111111111111111111111111111111111111f88888888888888888f1111111f........
    ......f1111111111111111111111111111111111111111111111111111111f888888888888888f11111111f........
    ......f11111111111111111111fffffffff111111111111111111111111111f8888888888888f111111111f........
    ......f111111111111111111ff888888888ff11111111111111111111111111ff888888888ff1111111111f........
    ......f11111111111111111f8888888888888f111111111111111111111111111fffffffff111111111111f........
    ...fffffff1111111111111f888888888888888f11111111111111111111111111111111111111111111111f........
    ..f8888888f11111111111f88888888888888888f1111111111111111111111111111111111111111111111f........
    .f888888888f111111111f8888888888888888888f111111111111111111111111111111111111111111111f........
    .f888888888f111111111f8888888888888888888f111111111111111111111111111111ffffffffffffff1f........
    .f888888888f11111111f888888888888888888888f11111111111111111111111111111f111111111111f1f........
    .f888888888f11111111f888888888888888888888f11111111111111111111111111111f11aaa1221111f1f........
    .f888888888f11111111f888888888888888888888f11111111111111111111111111111f11aaa1221661f1f........
    .f888888888f11111111f888888888888888888888f11111111111111111111111111111f11aaa1111661f1f........
    .f888888888f11111111f888888888888888888888f1111111ffffffffffffffff111111f111111111111f1f........
    ..f8888888f111111111f888888888888888888888f1111111fddddddddddddddf111111ffffffffffffff1f........
    ...fffffff1111111111f888888888888888888888f1111111fddddddddddddddf111111111111111111111f........
    ......f1111111111111f888888888888888888888f1111111fddddddddddddddf111111111111111111111f........
    ......f1111111111111f888888888888888888888f1111111fddddddddddddddf111111111111111111111f........
    ......f11111111111111f8888888888888888888f11111111fddddddddddddddf111111111111111111111f........
    ......f11111111111111f8888888888888888888f11111111fddddddddddddddf111111111111111fffffff........
    ......f111111111111111f88888888888888888f111111111fddddddddddddddf1111111111111ff8888888ff......
    ......f1111111111111111f888888888888888f1111111111fddddddddddddddf111111111111f88888888888f.....
    ......f11111111111111111f8888888888888f11111111111fddddddddddddddf111111111111f88888888888f.....
    ......f1111111fffffff1111ff888888888ff111111111111fddddddddddddddf11111111111f8888888888888f....
    ......f111111f1111111f11111fffffffff11111111111111fddddddddddddddf11111111111f8888888888888f....
    ......f11111f111111111f111111111111111111111111111fddddddddddddddf11111111111f8888888888888f....
    ......f1111f112221aaa11f11111111111111111111111111fddddddddddddddf11111111111f8888888888888f....
    ......f1111f112221aaa11f11111111111111111111111111fddddddddddddddf11111111111f8888888888888f....
    ......f1111f112221aaa11f11111111111111111111111111fddddddddddddddf11111111111f8888888888888f....
    ......f1111f11111111111f11111111111111111111111111fddddddddddddddf11111111111f8888888888888f....
    ......f1111f11888141511f11111111111111111111111111fddddddddddddddf111111111111f88888888888f.....
    ......f1111f11888111111f11111111111111111111111111fddddddddddddddf111111111111f88888888888f.....
    ......f1111f11888121711f11111111111111111111111111fddddddddddddddf1111111111111ff8888888ff......
    ......f11111f111111111f111111111111111111111111111fddddddddddddddf111111111111111fffffff........
    ......f111111f1111111f1111111111111111111111111111fddddddddddddddf111111111111111111111f........
    ......f1111111fffffff11111111111111111111111111111fddddddddddddddf111111111111111111111f........
    ......f1111111111111111111111111111111111111111111fddddddddddddddf111111111111111111111f........
    ......ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    ................................................................................................
    `, SpriteKind.Structure)
Player_character = sprites.create(img`
    ................
    .......11.......
    ......1ff1......
    .....1ffff1.....
    .....1ffff1.....
    ......1ff1......
    .......11.......
    ...1111111111...
    ..111111111111..
    ..11.111111.11..
    ..11.1ffff1.11..
    ..11.1f29f1.11..
    ..11.1ffff1.11..
    ..ff.111111.ff..
    .....11..11.....
    .....11..11.....
    .....11..11.....
    .....11..11.....
    ....111..111....
    ....fff..fff....
    `, SpriteKind.Player)
let textSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.textSprites)
Gravity = 0.8
jump = false
gto_base_said = false
inInventory = false
miningEfficiency = 100
let inventoryContents = 0
scene.cameraFollowSprite(Player_character)
tiles.placeOnTile(Base, tiles.getTileLocation(51, 12))
tiles.placeOnTile(Player_character, tiles.getTileLocation(48, 13))
controller.moveSprite(Player_character, 50, 0)
Ores()
Keybinds.setSimulatorKeymap(
Keybinds.PlayerNumber.TWO,
Keybinds.CustomKey.I,
Keybinds.CustomKey.UP,
Keybinds.CustomKey.UP,
Keybinds.CustomKey.UP,
Keybinds.CustomKey.UP,
Keybinds.CustomKey.UP
)
activateInventory(true)
activateInventory(false)
GROWTrees()
game.onUpdate(function () {
    Player_character.vy += Gravity
})
