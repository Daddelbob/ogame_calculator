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
  public universeSpeed: number = 7;
  public baseIncomeMetal: number = 30;
  public baseIncomeCrystal: number = 15;
  public isCollector: boolean = true;
  public hasGeologist: boolean = false;
  public geologistFactorAll: number = 10;
  public hasEngineer: boolean = false;
  public engineerFactorEnergy: number = 10;
  public hasCommando: boolean = false;
  public plasmaTechnologyLvl: number = 10;
  public energyTechnologyLvl: number = 9;
  public arraySize25: number[] = Array.from(
    new Array(25),
    (val, index) => index
  );

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
    FusionReactor.production(this.fusionReactorLvl, this.energyTechnologyLvl) *
    (this.fusionReactorPercentage / 100);
  public fusionReactorDeuteriumConsumtion: number =
    FusionReactor.deuteriumConsumption(this.fusionReactorLvl) *
    (this.fusionReactorPercentage / 100) *
    this.universeSpeed;

  // Solar Satellites Variables
  public solarSatellitesAmount: number = 180;
  public solarSatellitesPercentage: number = 100;
  public solarSatellitesEnergyProd: number =
    SolarSatellite.production(this.temperature) *
    this.solarSatellitesAmount *
    (this.solarSatellitesPercentage / 100);

  // Crawler Variables
  public crawlersAmount: number = 80;
  public crawlersPercentage: number = 100;
  public crawlersMetalProd: number =
    Math.floor(this.metalMineProd * Crawler.metalProdFactor) *
    (this.isCollector ? 1 + Officers.collectorCrawlerProdFactor : 1) *
    this.crawlersAmount *
    (this.crawlersPercentage / 100);
  public crawlersCrystalProd: number =
    Math.floor(
      this.crystalMineProd * Crawler.crystalProdFactor * this.crawlersAmount
    ) *
    (this.crawlersPercentage / 100);
  public crawlersDeuteriumProd: number =
    Math.floor(
      this.deuteriumSynthesizerProd *
        Crawler.deuteriumProdFactor *
        this.crawlersAmount
    ) *
    (this.crawlersPercentage / 100);
  public crawlersEnergyConsumtion: number =
    this.crawlersAmount *
    Crawler.energyConsumtion *
    (this.crawlersPercentage / 100);

  //Plasma Technology Variables
  public plasmaTechnologyMetalProd: number = Math.floor(
    this.metalMineProd * this.plasmaTechnologyLvl * 0.01
  );
  public plasmaTechnologyCrystalProd: number = Math.floor(
    this.crystalMineProd * this.plasmaTechnologyLvl * 0.0066
  );
  public plasmaTechnologyDeuteriumProd: number = Math.floor(
    this.deuteriumSynthesizerProd * this.plasmaTechnologyLvl * 0.0033
  );

  // Items Variables
  public itemMetalProd: number = Math.floor(
    (this.metalMineProd * this.selectedItemMetal) / 100
  );
  public itemCrystalProd: number = Math.floor(
    (this.crystalMineProd * this.selectedItemCrystal) / 100
  );
  public itemDeuteroiumProd: number = Math.floor(
    (this.deuteriumSynthesizerProd * this.selectedItemDeuterium) / 100
  );

  // Officer and Player-Class Variables
  public geologistMetalProd: number = Math.floor(
    (this.metalMineProd * this.geologistFactorAll) / 100
  );
  public geologistCrystalProd: number = Math.floor(
    (this.crystalMineProd * this.geologistFactorAll) / 100
  );
  public geologistDeuteroiumProd: number = Math.floor(
    (this.deuteriumSynthesizerProd * this.geologistFactorAll) / 100
  );

  public engineerEnergyProd: number = Math.floor(
    ((this.solarPlantProd +
      this.solarSatellitesEnergyProd +
      this.fusionReactorEnergyProd) *
      this.engineerFactorEnergy) /
      100
  );

  public commandoMetalProd: number = Math.floor(
    this.metalMineProd * Officers.commandoMinesAndEnergyProdFactor
  );
  public commandoCrystalProd: number = Math.floor(
    this.crystalMineProd * Officers.commandoMinesAndEnergyProdFactor
  );
  public commandoDeuteroiumProd: number = Math.floor(
    this.deuteriumSynthesizerProd * Officers.commandoMinesAndEnergyProdFactor
  );
  public commandoEnergyProd: number = Math.floor(
    this.deuteriumSynthesizerProd * Officers.commandoMinesAndEnergyProdFactor
  );

  public collectorMetalProd: number = Math.floor(
    this.metalMineProd * Officers.collectorMinesProdFactor
  );
  public collectorCrystalProd: number = Math.floor(
    this.crystalMineProd * Officers.collectorMinesProdFactor
  );
  public collectorDeuteroiumProd: number = Math.floor(
    this.deuteriumSynthesizerProd * Officers.collectorMinesProdFactor
  );
  public collectorEnergyProd: number = Math.floor(
    (this.solarPlantProd +
      this.solarSatellitesEnergyProd +
      this.fusionReactorEnergyProd) *
      Officers.collectorEnergyProdFactor
  );

  // Resource Depots Variables
  public metalDepotLvl: number = 0;
  public metalDepotCapacity: number = ResourceDepot.capacity(
    this.metalDepotLvl
  );
  public crstalDepotLvl: number = 0;
  public crstalDepotCapacity: number = ResourceDepot.capacity(
    this.crstalDepotLvl
  );
  public deuteriumDepotLvl: number = 0;
  public deuteriumDepotCapacity: number = ResourceDepot.capacity(
    this.deuteriumDepotLvl
  );

  // Total Resources
  public totalMetalProd: number = 0;
  public totalCrystalProd: number = 0;
  public totalDeuteriumProd: number = 0;
  public totalEnergyProd: number = 0;

  // Resources Form to interact with
  public resourceForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reloadForm();

    this.resourceForm.valueChanges.subscribe(changes => {
      console.log(changes);
      this.calculateStats();
    });
  }

  reloadForm() {
    this.resourceForm = this.formBuilder.group({
      metalMineLvlControl: 0,
      crystalMineLvlControl: 0,
      deuteriumSynthesizerLvlControl: 0,
      solarPlantLvlControl: 0,
      fusionReactorLvlControl: 0,
      solarSatellitesAmountControl: 0,
      crawlersAmountControl: 0,
      plasmaTechnologyLvlControl: 0,
      // items
      selectedItemMetalControl: 0,
      selectedItemCrystalControl: 0,
      selectedItemDeuteriumControl: 0,
      // bonuses
      hasGeologistControl: false,
      hasEngineerControl: false,
      hasCommandoControl: false,
      isCollectorControl: false
    });
  }

  ngOnInit() {
    console.log("init");
    this.calculateStats();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("change", changes);
    // this.calculateStats();
  }

  formatLabel(value: number) {
    if (value >= 1000000) {
      return Math.round(value / 1000000) + "M";
    }
    return value;
  }

  calculateStats() {
    // items
    this.itemMetalProd = Math.floor(
      (this.metalMineProd * this.selectedItemMetal) / 100
    );
    this.itemCrystalProd = Math.floor(
      (this.crystalMineProd * this.selectedItemCrystal) / 100
    );
    this.itemDeuteroiumProd = Math.floor(
      (this.deuteriumSynthesizerProd * this.selectedItemDeuterium) / 100
    );

    // depots
    this.metalDepotCapacity = ResourceDepot.capacity(this.metalDepotLvl);
    this.crstalDepotCapacity = ResourceDepot.capacity(this.crstalDepotLvl);
    this.deuteriumDepotCapacity = ResourceDepot.capacity(
      this.deuteriumDepotLvl
    );

    // Resources
    this.totalMetalProd = Math.floor(
      this.metalMineProd +
        this.crawlersMetalProd +
        this.plasmaTechnologyMetalProd +
        this.itemMetalProd +
        this.geologistMetalProd +
        this.commandoMetalProd +
        this.collectorMetalProd
    );

    this.totalCrystalProd = Math.floor(
      this.crystalMineProd +
        this.crawlersCrystalProd +
        this.plasmaTechnologyCrystalProd +
        this.itemCrystalProd +
        this.geologistCrystalProd +
        this.commandoCrystalProd +
        this.collectorCrystalProd
    );

    this.totalDeuteriumProd = Math.floor(
      this.deuteriumSynthesizerProd +
        this.crawlersDeuteriumProd +
        this.plasmaTechnologyDeuteriumProd +
        this.itemDeuteroiumProd +
        this.geologistDeuteroiumProd +
        this.commandoDeuteroiumProd +
        this.collectorDeuteroiumProd
    );

    this.totalEnergyProd =
      this.solarPlantProd +
      this.fusionReactorEnergyProd +
      this.solarSatellitesEnergyProd +
      this.engineerEnergyProd +
      this.commandoEnergyProd +
      this.collectorEnergyProd -
      this.metalMineEnergyConsumtion -
      this.crystalMineEnergyConsumtion -
      this.deuteriumSynthesizerEnergyConsumtion -
      this.crawlersEnergyConsumtion;
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
        (100 + 1 * this.plasmaTechnologyLvl)) /
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
