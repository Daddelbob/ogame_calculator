export class MetalMine {
  /**
   * ABRUNDEN(30 * STUFE * 1,1 ^ STUFE)
   * @param metalMineLvl
   */
  production(metalMineLvl: number = 0): number {
    return Math.floor(30 * metalMineLvl * Math.pow(1.1, metalMineLvl));
  }

  /**
   * AUFRUNDEN(10 * STUFE * 1,1 ^ STUFE)
   * @param metalMineLvl
   */
  energyConsumption(metalMineLvl: number = 0): number {
    return Math.ceil(10 * metalMineLvl * Math.pow(1.1, metalMineLvl));
  }

  /**
   * ABRUNDEN(40 * 1,5 ^ X)
   * @param metalMineLvl
   */
  metalCosts(metalMineLvl: number = 0): number {
    return Math.floor(40 * Math.pow(1.5, metalMineLvl));
  }


  /**
   * ABRUNDEN(10 * 1,5 ^ X)
   * @param metalMineLvl
   */
  crystalCosts(metalMineLvl: number = 0): number {
    return Math.floor(10 * Math.pow(1.5, metalMineLvl));
  }
}
