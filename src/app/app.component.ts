import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
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
export class AppComponent implements OnInit, OnChanges {
  title = "oGameCalculator";

  // Global Account Variables
  public universeSpeed: number = 7;
  public baseIncomeMetal: number = 30;
  public baseIncomeCrystal: number = 15;
  public isCollector: boolean = true;
  public hasGeologist: boolean = false;
  public geologistFactorAll: number = 10;
  public hasEngineer: boolean = false;
  public engineerFactorEnergy: number = 10;
  public hasCommando: boolean = false;
  public commandoFactorEnergyAndMines: number = 2;
  public plasmaTechnology: number = 10;
  public energyTechnology: number = 9;

  // Planet Variables
  public temperature: number = 32;
  public selectedItemMetal: number = 0;
  public selectedItemCrystal: number = 0;
  public selectedItemDeuterium: number = 0;

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
  public deuteriumSynthesizerLvl: number = 24;
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
  public solarSatellites: number = 180;
  public solarSatellitesPercentage: number = 100;
  public solarSatellitesEnergyProd: number =
    SolarSatellite.production(this.temperature) *
    this.solarSatellites *
    (this.solarSatellitesPercentage / 100);

  // Crawler Variables
  public crawlers: number = 80;
  public crawlersPercentage: number = 100;
  public crawlersMetalProd: number =
    Math.floor(this.metalMineProd * Crawler.metalProdFactor) *
    (this.isCollector ? 1 + Officers.collectorCrawlerProdFactor : 1) *
    this.crawlers *
    (this.crawlersPercentage / 100);
  public crawlersCrystalProd: number =
    Math.floor(
      this.crystalMineProd * Crawler.crystalProdFactor * this.crawlers
    ) *
    (this.crawlersPercentage / 100);
  public crawlersDeuteriumProd: number =
    Math.floor(
      this.deuteriumSynthesizerProd *
        Crawler.deuteriumProdFactor *
        this.crawlers
    ) *
    (this.crawlersPercentage / 100);
  public crawlersEnergyConsumtion: number =
    this.crawlers * Crawler.energyConsumtion * (this.crawlersPercentage / 100);

  //Plasma Technology Variables
  public plasmaTechnologyMetalProd: number =
    this.metalMineProd * this.plasmaTechnology * 0.01;
  public plasmaTechnologyCrystalProd: number =
    this.crystalMineProd * this.plasmaTechnology * 0.0066;
  public plasmaTechnologyDeuteriumProd: number =
    this.deuteriumSynthesizerProd * this.plasmaTechnology * 0.0033;

  // Items Variables
  public itemMetalProd: number =
    (this.metalMineProd * this.selectedItemMetal) / 100;
  public itemCrystalProd: number =
    (this.crystalMineProd * this.selectedItemCrystal) / 100;
  public itemDeuteroiumProd: number =
    (this.deuteriumSynthesizerProd * this.selectedItemDeuterium) / 100;

  // Officer and Player-Class Variables
  public geologistMetalProd: number =
    (this.metalMineProd * this.geologistFactorAll) / 100;
  public geologistCrystalProd: number =
    (this.crystalMineProd * this.geologistFactorAll) / 100;
  public geologistDeuteroiumProd: number =
    (this.deuteriumSynthesizerProd * this.geologistFactorAll) / 100;

  public engineerEnergyProd: number =
    ((this.solarPlantProd +
      this.solarSatellitesEnergyProd +
      this.fusionReactorEnergyProd) *
      this.engineerFactorEnergy) /
    100;

  public commandoMetalProd: number =
    (this.metalMineProd * this.commandoFactorEnergyAndMines) / 100;
  public commandoCrystalProd: number =
    (this.crystalMineProd * this.commandoFactorEnergyAndMines) / 100;
  public commandoDeuteroiumProd: number =
    (this.deuteriumSynthesizerProd * this.commandoFactorEnergyAndMines) / 100;
  public commandoEnergyProd: number =
    (this.deuteriumSynthesizerProd * this.commandoFactorEnergyAndMines) / 100;

  constructor() {}

  ngOnInit() {
    // this.calculateStats();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.calculateStats();
  }

  formatLabel(value: number) {
    if (value >= 1000000) {
      return Math.round(value / 1000000) + "M";
    }
    return value;
  }

  calculateStats() {
    this.itemMetalProd = (this.metalMineProd * this.selectedItemMetal) / 100;
    this.itemCrystalProd =
      (this.crystalMineProd * this.selectedItemCrystal) / 100;
    this.itemDeuteroiumProd =
      (this.deuteriumSynthesizerProd * this.selectedItemDeuterium) / 100;
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
