peter_pan_song = "";
harry_potter_theme_song = ""

function setup ()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw ()
{
    image(0, 0, 0, 600, 500);
}

function preload()
{
    peter_pan_song = loadSound("music2.mp3");
    harry_potter_theme_song = loadSound("music.mp3");
}