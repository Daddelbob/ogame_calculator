export class FusionReactor {
  /**
   * ABRUNDEN(30 * STUFE * (1,05 + ENERGIETECHNIK * 0,01) ^ STUFE)
   * @param fusionReactorLvl
   * @param energyTechnology
   */
  public static production(
    fusionReactorLvl: number = 0,
    energyTechnology: number = 0
  ): number {
    return Math.floor(
      30 *
        fusionReactorLvl *
        Math.pow(1.05 + energyTechnology * 0.01, fusionReactorLvl)
    );
  }

  /**
   * AUFRUNDEN(10 * STUFE * 1,1 ^ STUFE)
   * @param fusionReactorLvl
   */
  public static deuteriumConsumption(fusionReactorLvl: number = 0): number {
    return Math.ceil(10 * fusionReactorLvl * Math.pow(1.1, fusionReactorLvl));
  }

  /**
   * ABRUNDEN(500 * 1,8 ^ X)
   * @param fusionReactorLvl
   */
  public static metalCosts(fusionReactorLvl: number = 0): number {
    return Math.floor(500 * Math.pow(1.8, fusionReactorLvl));
  }

  /**
   * ABRUNDEN(200 * 1,8 ^ X)
   * @param fusionReactorLvl
   */
  public static crystalCosts(fusionReactorLvl: number = 0): number {
    return Math.floor(200 * Math.pow(1.8, fusionReactorLvl));
  }

  /**
   * ABRUNDEN(100 * 1,8 ^ X)
   * @param fusionReactorLvl
   */
  public static deuteriumCosts(fusionReactorLvl: number = 0): number {
    return Math.floor(100 * Math.pow(1.8, fusionReactorLvl));
  }
}
