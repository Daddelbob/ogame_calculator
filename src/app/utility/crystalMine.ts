export class CrystalMine {
  /**
   * ABRUNDEN(20 * STUFE * 1,1 ^ STUFE)
   * @param crystalMineLvl
   */
  public static production(crystalMineLvl: number = 0): number {
    return Math.floor(20 * crystalMineLvl * Math.pow(1.1, crystalMineLvl));
  }

  /**
   * AUFRUNDEN(10 * STUFE * 1,1 ^ STUFE)
   * @param crystalMineLvl
   */
  public static energyConsumption(crystalMineLvl: number = 0): number {
    return Math.ceil(10 * crystalMineLvl * Math.pow(1.1, crystalMineLvl));
  }

  /**
   * ABRUNDEN(48 * 1,6 ^ X)
   * @param crystalMineLvl
   */
  public static metalCosts(crystalMineLvl: number = 0): number {
    return Math.floor(48 * Math.pow(1.6, crystalMineLvl));
  }


  /**
   * ABRUNDEN(24 * 1,6 ^ X)
   * @param crystalMineLvl
   */
  public static crystalCosts(crystalMineLvl: number = 0): number {
    return Math.floor(24 * Math.pow(1.6, crystalMineLvl));
  }
}
