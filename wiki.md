# Temporary file to contain wiki entries before we have a real wiki

# Developer wiki pages
* Developer wiki pages contain relevant information for how a developer might implement a feature to be. The reason why developer wiki pages should exist is so that it makes ideas and things to do be accessible to devlopers. For example one solution might be to just put todo's in the code and hope developers stumble across them, even if they do stumble across them who says they'll want to fix them. For me personally I enjoy working on a feature when I know the context, the motivation and how the project will benefit from working on this feature before I start writing code, to this end I believe a wiki with pages containing this relevant information is the minimal working example to help developers in this way.
* On every dev wiki page, we know if it's a feature which is completely implemented, and in that case there are no (under construction images) and it is written from the point of view of how it is currently implemented and any notes which might not fit in the code base?
* If it's not yet implemented there will be text explaining how to implement the feature.


# GODOT 

As you can see we are using godot to develop our game, it has a few quirks:
	
* Classes:
	
* Singletons:
	
	
* Networking:
	* Instead of working at a low level with sockets and packets, we mostly work
	with the higher level implementations that godot provides. To that end, we 
	will work with rpc calls which is a way to call a function from the client 
	that exists on the server.
	* In order for this call to go through the node at which the function exists
	must be present on both the client and server, the nodes path and function
	signature must be identical, but implementations do not (one side uses pass)
	* Instead of keeping track of what the node path is of the node, we can 
	can simply just make a singleton
 
 
 # In-game player rewards for supporting
 
 add in the new character player model. If we add in the new player model, then we have to figure 
out how to keep the player levitating off the ground so that they can walk up objects, the issue
is that when it's low to the ground, what if we turn off map collisions with the feet? we'll think 
about this more. for now we can just give it a cylender mesh and just leave it as the model.

continue uploading videos, when the website gets updated, then we can start uploading conent on patreon.
If you subscribe on patreon you get a badge, which is like a binary number/colenel badge on your player.
kind of like a badge/shield/thing on your back?

embed cool information about the player directly on the player. We need accounts for the player to keep
track of these things...

patreon subscriber (orange/red?)
first gametest (blue color)
game tester (green pixel color)
developer (purple)
creator (gold)

it could be like a pixel array, and you want to get them all colored?

# Game Modes

## Team Death Match

Last Player Standing Deathmatch (aka clan arena)
everyone starts with infinite ammo and every weapon, you have more health than usual? The game ends 
when there is one player left.

In order to facilitate teams, we need to know what team a player is on.
for this we can add a field to all players which is just given a number, and -1, if not doing teams.
so if two players hit eachother, but they are on the same team do nothing. We also need to assign a color
to each team and color the players respectively.

## Insta Kill


# Skill detection system
In frag-z the main game mode is skill dm, in order to facilitate this gamemode, we need to have code that can detect when something skillful has occurred
The only two was of hitting shots in frag-z are with projectiles or hitscan weapons

## speed up development
display relevant player flags on screen to debug

## projectiles:
* A skill detection is performed when the projectile damages an enemy (directly or splash)

## hitscan
* A skill check is performed when at least one hitscan element of the hitscan spray of a hitscan weapon hits an enemy

If any of the above two events has occured then we call this a "skill moment", in this context a skill moment is a moment when a skill could have been performed, it's just the optimal time to check.

## chaining
On top of just detecting skill we want to give players the ability to earn even more points by chaining skills together, due to this each player will have a skill detector object which will tell you how much points they've earned at the end of a "line" (line_over signal)

# How to implement each skill detection
* In order to check if a skill was performed, we need to know various information about both users involved in the skill moment. For example, we would know if an airshot occured if the other player was airborne when the rocket connected, in the code base whenever a skill moment occurs, we use the skill detector to figure out the points 

## general skill
### required information
* attacker, victim and (hitscan_spray or projectile)

(Note: all of the following skills also require the above information)

## air shot
player is hit while mid-air with a projectile
### check occurs when
projectile collision with player (direct)
### required information
* projectile
  * travel_duration
* player
  * in_air
  * height_above_ground
### implementation
If victim is in air and attacker hits them directly with rocket, then using travel_duration and height_above_ground assign points.

## skeet shot
player is knocked up into the air with a projectile and then hit with the sniper rifle
### check occurs when
direct hit with sniper rifle
### required information
* player
  * knocked_into_air_by_projectile 
    * can be computed by determining this the moment you have been hit by a rocket, we can check on the next frame if you are now in the air, by having a flag which says if the player has been hit with a rocket on the last frame, if they've just been hit and they're in the air, then they have been "launched", when they are touching the ground, then they are no longer launched.
### implementation
if the enemy is currently launched by attacker, then assign points.

## meat shot
victim is hit by 80% of the spray of attackers shotgun
### check occurs when
at least one ray hits the victim


