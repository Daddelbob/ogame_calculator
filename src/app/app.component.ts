import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { MetalMine } from "./utility/metalMine";
import { CrystalMine } from "./utility/crystalMine";
import { DeuteriumSynthesizer } from "./utility/deuteriumSynthesizer";
import { SolarPlant } from "./utility/solarPlant";
import { FusionReactor } from "./utility/fusionReactor";
import { SolarSatellite } from "./utility/solarSatellite";
import { Crawler } from "./utility/crawler";
import { Officers } from "./utility/officers";
import { ResourceDepot } from "./utility/resourceDepot";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: "ogc-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent implements OnInit, OnChanges {
  title = "oGameCalculator";

  // Global Account Variables
  public baseIncomeMetal: number = 30;
  public baseIncomeCrystal: number = 15;
  public geologistFactorAll: number = 10;
  public engineerFactorEnergy: number = 10;
  public arraySize11: number[] = Array.from(
    new Array(11),
    (val, index) => index
  );

  // Resources Form to interact with
  public resourceForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reloadForm();

    this.resourceForm.valueChanges.subscribe(changes => {
      console.log(changes);
    });
  }

  reloadForm() {
    this.resourceForm = this.formBuilder.group({
      universeSpeedControl: 1,
      temperatureControl: 0,
      // Bulidings etc.
      metalMineLvlControl: 0,
      metalMinePercentageControl: 100,
      crystalMineLvlControl: 0,
      crystalMinePercentageControl: 100,
      deuteriumSynthesizerLvlControl: 0,
      deuteriumSynthesizerPercentageControl: 100,

      solarPlantLvlControl: 0,
      solarPlantPercentageControl: 100,
      fusionReactorLvlControl: 0,
      fusionReactorPercentageControl: 100,
      solarSatellitesAmountControl: 0,
      solarSatellitesPercentageControl: 100,
      crawlersAmountControl: 0,
      crawlersPercentageControl: 100,
      plasmaTechnologyLvlControl: 0,
      energyTechnologyLvlControl: 0,
      // items
      selectedItemMetalControl: 0,
      selectedItemCrystalControl: 0,
      selectedItemDeuteriumControl: 0,
      // bonuses
      hasGeologistControl: false,
      hasEngineerControl: false,
      hasCommandoControl: false,
      isCollectorControl: false,
      // resource depots
      metalDepotLvlControl: 0,
      crystalDepotLvlControl: 0,
      deuteriumDepotLvlControl: 0
    });
  }

  get universeSpeed() {
    return this.resourceForm.get("universeSpeedControl").value;
  }

  get temperature() {
    return this.resourceForm.get("temperatureControl").value;
  }

  get metalMineLvl() {
    return this.resourceForm.get("metalMineLvlControl").value;
  }

  get metalMinePercentage() {
    return this.resourceForm.get("metalMinePercentageControl").value;
  }

  get crystalMineLvl() {
    return this.resourceForm.get("crystalMineLvlControl").value;
  }

  get crystalMinePercentage() {
    return this.resourceForm.get("crystalMinePercentageControl").value;
  }

  get deuteriumSynthesizerLvl() {
    return this.resourceForm.get("deuteriumSynthesizerLvlControl").value;
  }

  get deuteriumSynthesizerPercentage() {
    return this.resourceForm.get("deuteriumSynthesizerPercentageControl").value;
  }

  get solarPlantLvl() {
    return this.resourceForm.get("solarPlantLvlControl").value;
  }

  get solarPlantPercentage() {
    return this.resourceForm.get("solarPlantPercentageControl").value;
  }

  get fusionReactorLvl() {
    return this.resourceForm.get("fusionReactorLvlControl").value;
  }

  get fusionReactorPercentage() {
    return this.resourceForm.get("fusionReactorPercentageControl").value;
  }

  get solarSatellitesAmount() {
    return this.resourceForm.get("solarSatellitesAmountControl").value;
  }

  get solarSatellitesPercentage() {
    return this.resourceForm.get("solarSatellitesPercentageControl").value;
  }

  get crawlersAmount() {
    return this.resourceForm.get("crawlersAmountControl").value;
  }

  get crawlersPercentage() {
    return this.resourceForm.get("crawlersPercentageControl").value;
  }

  get plasmaTechnologyLvl() {
    return this.resourceForm.get("plasmaTechnologyLvlControl").value;
  }

  get energyTechnologyLvl() {
    return this.resourceForm.get("energyTechnologyLvlControl").value;
  }

  get selectedItemMetal() {
    return this.resourceForm.get("selectedItemMetalControl").value;
  }

  get selectedItemCrystal() {
    return this.resourceForm.get("selectedItemCrystalControl").value;
  }

  get selectedItemDeuterium() {
    return this.resourceForm.get("selectedItemDeuteriumControl").value;
  }

  get hasGeologist() {
    return this.resourceForm.get("hasGeologistControl").value;
  }

  get hasEngineer() {
    return this.resourceForm.get("hasEngineerControl").value;
  }

  get hasCommando() {
    return this.resourceForm.get("hasCommandoControl").value;
  }

  get isCollector() {
    return this.resourceForm.get("isCollectorControl").value;
  }

  get metalDepotLvl() {
    return this.resourceForm.get("metalDepotLvlControl").value;
  }

  get crystalDepotLvl() {
    return this.resourceForm.get("crystalDepotLvlControl").value;
  }

  get deuteriumDepotLvl() {
    return this.resourceForm.get("deuteriumDepotLvlControl").value;
  }

  ngOnInit() {
    console.log("init");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("change", changes);
  }

  ////////////////////////////////////////////////////////

  // Metal Mine Variables
  public metalMineProd(): number {
    return Math.floor(
      MetalMine.production(this.metalMineLvl) *
        (this.metalMinePercentage / 100) *
        this.universeSpeed
    );
  }

  public metalMineEnergyConsumtion(): number {
    return Math.ceil(
      MetalMine.energyConsumption(this.metalMineLvl) *
        (this.metalMinePercentage / 100)
    );
  }

  // Crystal Mine Variables
  public crystalMineProd(): number {
    return Math.floor(
      CrystalMine.production(this.crystalMineLvl) *
        (this.crystalMinePercentage / 100) *
        this.universeSpeed
    );
  }

  public crystalMineEnergyConsumtion(): number {
    return Math.ceil(
      CrystalMine.energyConsumption(this.crystalMineLvl) *
        (this.crystalMinePercentage / 100)
    );
  }

  // Deuterium Synthesizer Variables
  public deuteriumSynthesizerProd(): number {
    return Math.floor(
      DeuteriumSynthesizer.production(
        this.deuteriumSynthesizerLvl,
        this.temperature
      ) *
        (this.deuteriumSynthesizerPercentage / 100) *
        this.universeSpeed
    );
  }
  public deuteriumSynthesizerEnergyConsumtion(): number {
    return Math.ceil(
      DeuteriumSynthesizer.energyConsumption(this.deuteriumSynthesizerLvl) *
        (this.deuteriumSynthesizerPercentage / 100)
    );
  }

  // Solar Plant Variables
  public solarPlantProd(): number {
    return Math.floor(
      SolarPlant.production(this.solarPlantLvl) *
        (this.solarPlantPercentage / 100)
    );
  }

  // Fusion Reactor Variables
  public fusionReactorEnergyProd(): number {
    return Math.floor(
      FusionReactor.production(
        this.fusionReactorLvl,
        this.energyTechnologyLvl
      ) *
        (this.fusionReactorPercentage / 100)
    );
  }
  public fusionReactorDeuteriumConsumtion(): number {
    return Math.ceil(
      FusionReactor.deuteriumConsumption(this.fusionReactorLvl) *
        (this.fusionReactorPercentage / 100) *
        this.universeSpeed
    );
  }

  // Solar Satellites Variables
  public solarSatellitesEnergyProd(): number {
    return Math.floor(
      SolarSatellite.production(this.temperature) *
        this.solarSatellitesAmount *
        (this.solarSatellitesPercentage / 100)
    );
  }

  // Crawler Variables
  public crawlersMetalProd(): number {
    return (
      Math.floor(this.metalMineProd() * Crawler.metalProdFactor) *
      (this.isCollector ? 1 + Officers.collectorCrawlerProdFactor : 1) *
      this.crawlersAmount *
      (this.crawlersPercentage / 100)
    );
  }
  public crawlersCrystalProd(): number {
    return (
      Math.floor(
        this.crystalMineProd() * Crawler.crystalProdFactor * this.crawlersAmount
      ) *
      (this.crawlersPercentage / 100)
    );
  }
  public crawlersDeuteriumProd(): number {
    return (
      Math.floor(
        this.deuteriumSynthesizerProd() *
          Crawler.deuteriumProdFactor *
          this.crawlersAmount
      ) *
      (this.crawlersPercentage / 100)
    );
  }
  public crawlersEnergyConsumtion(): number {
    return (
      this.crawlersAmount *
      Crawler.energyConsumtion *
      (this.crawlersPercentage / 100)
    );
  }

  //Plasma Technology Variables
  public plasmaTechnologyMetalProd(): number {
    return Math.floor(this.metalMineProd() * this.plasmaTechnologyLvl * 0.01);
  }
  public plasmaTechnologyCrystalProd(): number {
    return Math.floor(
      this.crystalMineProd() * this.plasmaTechnologyLvl * 0.0066
    );
  }
  public plasmaTechnologyDeuteriumProd(): number {
    return Math.floor(
      this.deuteriumSynthesizerProd() * this.plasmaTechnologyLvl * 0.0033
    );
  }

  // Items Variables
  public itemMetalProd(): number {
    return Math.floor((this.metalMineProd() * this.selectedItemMetal) / 100);
  }
  public itemCrystalProd(): number {
    return Math.floor(
      (this.crystalMineProd() * this.selectedItemCrystal) / 100
    );
  }
  public itemDeuteroiumProd(): number {
    return Math.floor(
      (this.deuteriumSynthesizerProd() * this.selectedItemDeuterium) / 100
    );
  }

  // Officer and Player-Class Variables
  public geologistMetalProd(): number {
    return Math.floor((this.metalMineProd() * this.geologistFactorAll) / 100);
  }
  public geologistCrystalProd(): number {
    return Math.floor((this.crystalMineProd() * this.geologistFactorAll) / 100);
  }
  public geologistDeuteroiumProd(): number {
    return Math.floor(
      (this.deuteriumSynthesizerProd() * this.geologistFactorAll) / 100
    );
  }

  public engineerEnergyProd(): number {
    return Math.floor(
      ((this.solarPlantProd() +
        this.solarSatellitesEnergyProd() +
        this.fusionReactorEnergyProd()) *
        this.engineerFactorEnergy) /
        100
    );
  }

  public commandoMetalProd(): number {
    return Math.floor(
      this.metalMineProd() * Officers.commandoMinesAndEnergyProdFactor
    );
  }
  public commandoCrystalProd(): number {
    return Math.floor(
      this.crystalMineProd() * Officers.commandoMinesAndEnergyProdFactor
    );
  }
  public commandoDeuteroiumProd(): number {
    return Math.floor(
      this.deuteriumSynthesizerProd() *
        Officers.commandoMinesAndEnergyProdFactor
    );
  }
  public commandoEnergyProd(): number {
    return Math.floor(
      this.deuteriumSynthesizerProd() *
        Officers.commandoMinesAndEnergyProdFactor
    );
  }

  public collectorMetalProd(): number {
    return Math.floor(this.metalMineProd() * Officers.collectorMinesProdFactor);
  }
  public collectorCrystalProd(): number {
    return Math.floor(
      this.crystalMineProd() * Officers.collectorMinesProdFactor
    );
  }
  public collectorDeuteroiumProd(): number {
    return Math.floor(
      this.deuteriumSynthesizerProd() * Officers.collectorMinesProdFactor
    );
  }
  public collectorEnergyProd(): number {
    return Math.floor(
      (this.solarPlantProd() +
        this.solarSatellitesEnergyProd() +
        this.fusionReactorEnergyProd()) *
        Officers.collectorEnergyProdFactor
    );
  }

  // Resource Depots Variables
  public metalDepotCapacity(): number {
    return ResourceDepot.capacity(this.metalDepotLvl);
  }

  public crstalDepotCapacity(): number {
    return ResourceDepot.capacity(this.crystalDepotLvl);
  }

  public deuteriumDepotCapacity(): number {
    return ResourceDepot.capacity(this.deuteriumDepotLvl);
  }

  // Total Resources
  public totalMetalProd(): number {
    return Math.floor(
      this.baseIncomeMetal +
        this.metalMineProd() +
        this.crawlersMetalProd() +
        this.plasmaTechnologyMetalProd() +
        this.itemMetalProd() +
        this.geologistMetalProd() +
        this.commandoMetalProd() +
        this.collectorMetalProd()
    );
  }
  public totalCrystalProd(): number {
    return Math.floor(
      this.baseIncomeCrystal +
        this.crystalMineProd() +
        this.crawlersCrystalProd() +
        this.plasmaTechnologyCrystalProd() +
        this.itemCrystalProd() +
        this.geologistCrystalProd() +
        this.commandoCrystalProd() +
        this.collectorCrystalProd()
    );
  }
  public totalDeuteriumProd(): number {
    return Math.floor(
      this.deuteriumSynthesizerProd() +
        this.crawlersDeuteriumProd() +
        this.plasmaTechnologyDeuteriumProd() +
        this.itemDeuteroiumProd() +
        this.geologistDeuteroiumProd() +
        this.commandoDeuteroiumProd() +
        this.collectorDeuteroiumProd()
    );
  }

  public totalEnergyProd(): number {
    return Math.floor(
      this.solarPlantProd() +
        this.fusionReactorEnergyProd() +
        this.solarSatellitesEnergyProd() +
        this.engineerEnergyProd() +
        this.commandoEnergyProd() +
        this.collectorEnergyProd() -
        this.metalMineEnergyConsumtion() -
        this.crystalMineEnergyConsumtion() -
        this.deuteriumSynthesizerEnergyConsumtion() -
        this.crawlersEnergyConsumtion()
    );
  }

  /////////////////////////////////////////////////////////

  formatLabel(value: number) {
    if (value >= 1000000) {
      return Math.round(value / 1000000) + "M";
    }
    return value;
  }

  thousandsSeparator(amount: string, separator: string = ".") {
    const arr = amount.split("");
    arr.reverse();
    const toPop = arr.length % 3;
    let removed;
    if (toPop > 0 && arr.length > 3) {
      removed = arr.splice(arr.length - 1, toPop);
    }
    console.log(arr);
    console.log(removed);
    for (let i = 1; i < arr.length / 3; i++) {
      arr.splice(i * 3 + i - 1, 0, ".");
    }
    arr.pop();
    console.log(arr);
  }

  //   var arr = "1".split("");
  // arr.reverse();
  // var toPop = arr.length % 3;
  // var removed;
  // if(toPop > 0 && arr.length>3) {removed = arr.slice(arr.length-toPop,arr.length);}
  // console.log(arr);
  // console.log(removed);
  // for(var i=1; i<arr.length / 3; i++) {arr.splice(i*3+i-1, 0, ".");}
  // arr.pop();
  // console.log(arr);
}
