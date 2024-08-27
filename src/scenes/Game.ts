import { Scene } from "phaser";
import { GameController } from "../controllers/game_controller";

export class Game extends Scene {
  controller: GameController;
  constructor() {
    super("Game");
  }

  preload() {
    this.load.setPath("assets");
    this.load.image("star", "star.png");

    this.load.image("background", "bg.png");
    this.load.image("logo", "logo.png");
  }

  create() {
    this.controller = new GameController(this);
    this.add.image(512, 384, "background");
    this.add.image(512, 350, "logo").setDepth(100);
    this.add
      .text(
        512,
        490,
        "Make something fun!\nand share it with us:\nsupport@phaser.io",
        {
          fontFamily: "Arial Black",
          fontSize: 38,
          color: "#ffffff",
          stroke: "#000000",
          strokeThickness: 8,
          align: "center",
        }
      )
      .setOrigin(0.5)
      .setDepth(100);

    const button = this.add
      .image(512, 600, "star")
      .setInteractive() // 使按钮可交互
      .setScale(0.5); // 设置按钮的大小比例

    // 按钮点击事件
    button.on("pointerdown", () => this.handleButtonClick());
  }

  private handleButtonClick() {
    // 在这里处理按钮点击事件，例如跳转到下一个场景或执行其他操作
    this.controller.send_cmd();
    console.log("Handle the button click event here.");
  }
}
