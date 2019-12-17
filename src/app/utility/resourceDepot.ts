export class ResourceDepot {
  /**
   * ABRUNDEN(2,5 * e ^ (20 * STUFE / 33)) * 5.000
   * @param depotLvl
   */
  public static capacity(depotLvl: number = 0): number {
    return Math.floor(2.5 * Math.pow(Math.E, (20 * depotLvl) / 33) * 5000);
  }
}
