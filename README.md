# discord-profiler
A simple discord/rpc script that allows users to set a custom rich presence status

## Instructions
**Make sure you have [node.js](https://nodejs.org), and [git](https://git-scm.com/) installed.**

1. Clone the repo using `git clone https://github.com/LunarSkies/discord-profiler.git`
2. Open the repository folder and run the command `npm i`
3. Edit the values in profile.json to your liking using a text editor
4. Once you have edited the files, un the command `node .` to run the script
5. Congrats! You now have a minature profile as your status

**Note: mediaLarge and mediaSmall can both be replaced with most common social media names, be sure to write the names entirely in lowercase, and replace any possible spaces with a dash "-".**
### Now what?

That's it, as of right now at least. Expect more custom icons in the future.

### Concerns

_The social media I use isn't showing up_
>Feel free to open an issue on this repository and I will get to adding it as soon as possible

_Do I have to keep the window open?_
>Short answer: Yes

>Long answer: No, as an alternative you could use [pm2](http://pm2.keymetrics.io/) to keep the script alive in the background. If this becomes a common concern I will make a pm2 file specifically for the script

