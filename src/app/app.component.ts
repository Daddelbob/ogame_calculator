import { Component } from "@angular/core";
import { MetalMine } from "./utility/metalMine";
import { CrystalMine } from "./utility/crystalMine";
import { DeuteriumSynthesizer } from "./utility/deuteriumSynthesizer";
import { SolarPlant } from "./utility/solarPlant";
import { FusionReactor } from "./utility/fusionReactor";
import { SolarSatellite } from "./utility/solarSatellite";
import { Crawler } from "./utility/crawler";
import { Officers } from "./utility/officers";

@Component({
  selector: "ogc-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  title = "oGameCalculator";

  // Global Account Variables
  public universeSpeed: number = 7;
  public baseIncomeMetal: number = 30;
  public baseIncomeCrystal: number = 15;
  public isCollector: boolean = true;
  public hasCommander: boolean = false;
  public hasEngineer: boolean = false;
  public hasGeologist: boolean = false;
  public geologistFactorAll: number = 10;
  public hasCommandStab: boolean = false;
  public plasmaTechnology: number = 10;
  public energyTechnology: number = 9;

  // Planet Variables
  public temperature: number = -93;

  // Metal Mine Variables
  public metalMineLvl: number = 27;
  public metalMinePercentage: number = 100;
  public metalItem: number = 0;
  public metalMineProd: number =
    MetalMine.production(this.metalMineLvl) *
    (this.metalMinePercentage / 100) *
    this.universeSpeed;
  public metalMineEnergyConsumtion: number =
    MetalMine.energyConsumption(this.metalMineLvl) *
    (this.metalMinePercentage / 100);

  // Crystal Mine Variables
  public crystalMineLvl: number = 27;
  public crystalMinePercentage: number = 100;
  public crystalItem: number = 0;
  public crystalMineProd: number =
    CrystalMine.production(this.crystalMineLvl) *
    (this.crystalMinePercentage / 100) *
    this.universeSpeed;
  public crystalMineEnergyConsumtion: number =
    CrystalMine.energyConsumption(this.crystalMineLvl) *
    (this.crystalMinePercentage / 100);

  // Deuterium Synthesizer Variables
  public deuteriumSynthesizerLvl: number = 19;
  public deuteriumSynthesizerPercentage: number = 100;
  public deuteriumItem: number = 0;
  public deuteriumSynthesizerProd: number =
    DeuteriumSynthesizer.production(
      this.deuteriumSynthesizerLvl,
      this.temperature
    ) *
    (this.deuteriumSynthesizerPercentage / 100) *
    this.universeSpeed;
  public deuteriumSynthesizerEnergyConsumtion: number =
    DeuteriumSynthesizer.energyConsumption(this.deuteriumSynthesizerLvl) *
    (this.deuteriumSynthesizerPercentage / 100);

  // Solar Plant Variables
  public solarPlantLvl: number = 29;
  public solarPlantPercentage: number = 100;
  public solarPlantProd: number =
    SolarPlant.production(this.solarPlantLvl) *
    (this.solarPlantPercentage / 100);

  // Fusion Reactor Variables
  public fusionReactorLvl: number = 1;
  public fusionReactorPercentage: number = 100;
  public fusionReactorEnergyProd: number =
    FusionReactor.production(this.fusionReactorLvl, this.energyTechnology) *
    (this.fusionReactorPercentage / 100);
  public fusionReactorDeuteriumConsumtion: number =
    FusionReactor.deuteriumConsumption(this.fusionReactorLvl) *
    (this.fusionReactorPercentage / 100) *
    this.universeSpeed;

  // Solar Satellites Variables
  public solarSatellites: number = 221;
  public solarSatellitesPercentage: number = 100;
  public solarSatellitesEnergyProd: number =
    SolarSatellite.production(this.temperature) *
    this.solarSatellites *
    (this.solarSatellitesPercentage / 100);

  // Crawler Variables
  public crawlers: number = 80;
  public crawlersPercentage: number = 100;
  public crawlersMetalProd: number =
    this.metalMineProd *
    Crawler.metalProdFactor *
    (this.isCollector ? 1 + Officers.collectorCrawlerProdFactor : 1) *
    this.crawlers *
    (this.crawlersPercentage / 100);
  public crawlersCrystalProd: number =
    this.crystalMineProd *
    Crawler.crystalProdFactor *
    this.crawlers *
    (this.crawlersPercentage / 100);
  public crawlersDeuteriumProd: number =
    this.deuteriumSynthesizerProd *
    Crawler.deuteriumProdFactor *
    this.crawlers *
    (this.crawlersPercentage / 100);
  public crawlersEnergyConsumtion: number =
    this.crawlers * Crawler.energyConsumtion * (this.crawlersPercentage / 100);

  constructor() {}

  formatLabel(value: number) {
    if (value >= 1000000) {
      return Math.round(value / 1000000) + "M";
    }
    return value;
  }

  /**
   * ABRUNDEN(30 * STUFE * 1,1 ^ STUFE * "eingestellter Prozentsatz" * Geologe * Item + Grundproduktion) * ((100 + 1 * Stufe Plasmatechnik)/100) * Geschwindigkeitsfaktor
   *
   * @param metallMineLvl
   * @param universeSpeed
   */
  calcMetalMineProd(
    metallMineLvl: number = 0,
    universeSpeed: number = 1
  ): number {
    return (
      ((Math.floor(
        30 *
          metallMineLvl *
          Math.pow(1.1, this.metalMineLvl) *
          (this.metalMinePercentage / 100) *
          (this.geologistFactorAll / 100) *
          (this.metalItem / 100) +
          this.baseIncomeMetal
      ) *
        (100 + 1 * this.plasmaTechnology)) /
        100) *
      this.universeSpeed
    );
  }

  calcMetalMineEnergyConsumption(
    metallMineLvl: number = 0,
    metallMinePercentage: number = 100,
    universeSpeed: number = 1
  ): number {
    return Math.ceil(
      10 *
        metallMineLvl *
        Math.pow(1.1, metallMineLvl) *
        (metallMinePercentage / 100)
    );
  }
}
