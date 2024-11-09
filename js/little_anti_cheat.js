let cheatmode = 0;

function cheat_message()
{
    alert("CHEAT DETECTED!\nWe detects that you tried to hack to game :'(\nIf you want to play be your rules and get rid of this message, you can, here's how :\nRight click -> inspect -> console -> type \"cheatmode = 1;\"")
}

function little_anti_cheat()
{
    if (cheatmode != 1) {
        if (parsed_click_force_cost < 0) {
            cheat_message();
        }
        if (parsed_click_force_lvl < 0) {
            cheat_message();
        }
        if (parsed_cuddle_power_cost < 0) {
            cheat_message();
        }
        if (parsed_cuddle_power_lvl < 0) {
            cheat_message();
        }
    }
}
