export class SolarSatellite {
  public static crystalCosts: number = 2000;
  public static deuteriumCosts: number = 500;

  /**
   * ABRUNDEN((MAXIMALTEMPERATUR + 140) / 6)
   * @param temperature
   */
  public static production(temperature: number = 0): number {
    return Math.round((temperature + 140) / 6);
  }
}
