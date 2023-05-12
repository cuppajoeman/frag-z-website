# Temporary file to contain wiki entries before we have a real wiki

# Developer wiki pages
* Developer wiki pages contain relevant information for how a developer might implement a feature to be. The reason why developer wiki pages should exist is so that it makes ideas and things to do be accessible to devlopers. For example one solution might be to just put todo's in the code and hope developers stumble across them, even if they do stumble across them who says they'll want to fix them. For me personally I enjoy working on a feature when I know the context, the motivation and how the project will benefit from working on this feature before I start writing code, to this end I believe a wiki with pages containing this relevant information is the minimal working example to help developers in this way.
* On every dev wiki page, we know if it's a feature which is completely implemented, and in that case there are no (under construction images) and it is written from the point of view of how it is currently implemented and any notes which might not fit in the code base?
* If it's not yet implemented there will be text explaining how to implement the feature.




# Skill detection system
In frag-z the main game mode is skill dm, in order to facilitate this gamemode, we need to have code that can detect when something skillful has occurred
The only two was of hitting shots in frag-z are with projectiles or hitscan weapons

## projectiles:
* A skill detection is performed when the projectile damages an enemy (directly or splash)

## hitscan
* A skill check is performed when at least one hitscan element of the hitscan spray of a hitscan weapon hits an enemy

If any of the above two events has occured then we call this a "skill moment", in this context a skill moment is a moment when a skill could have been performed, it's just the optimal time to check.

# How to implement each skill detection
* In order to check if a skill was performed, we need to know various information about both users involved in the skill moment. For example, we would know if an airshot occured if the other player was airborne when the rocket connected.
(Todo grab everything from workflowy and bring it in here)
