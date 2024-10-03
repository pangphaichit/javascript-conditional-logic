//Exercise 2
let lightBulbStatus = "On";

lightBulbStatus = "Broken";
if (lightBulbStatus === "On") {
  console.log("Light bulb is On.");
} else if (lightBulbStatus === "Of") {
  console.log("Light bulb is Of.");
} else if (lightBulbStatus === "Broken") {
  console.log("Light bulb is Broken.");
} else {
  console.log("Please choose the correct input (On/Off/Broken)");
}
