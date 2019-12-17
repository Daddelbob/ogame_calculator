export class DeuteriumSynthesizer {
  /**
   * ABRUNDEN(10 * STUFE * 1,1 ^ STUFE * (1,44 - 0,004 * MAXIMALTEMPERATUR))
   * @param deuteriumSynthesizerLvl
   * @param temperature
   */
  production(
    deuteriumSynthesizerLvl: number = 0,
    temperature: number = 0
  ): number {
    return Math.floor(
      10 *
        deuteriumSynthesizerLvl *
        Math.pow(1.1, deuteriumSynthesizerLvl) *
        (1.44 - 0.004 * temperature)
    );
  }

  /**
   * AUFRUNDEN(20 * STUFE * 1,1 ^ STUFE)
   * @param deuteriumSynthesizerLvl
   */
  energyConsumption(deuteriumSynthesizerLvl: number = 0): number {
    return Math.ceil(
      20 * deuteriumSynthesizerLvl * Math.pow(1.1, deuteriumSynthesizerLvl)
    );
  }

  /**
   * ABRUNDEN(150 * 1,5 ^ X)
   * @param deuteriumSynthesizerLvl
   */
  metalCosts(deuteriumSynthesizerLvl: number = 0): number {
    return Math.floor(150 * Math.pow(1.5, deuteriumSynthesizerLvl));
  }

  /**
   * ABRUNDEN(50 * 1,5 ^ X)
   * @param deuteriumSynthesizerLvl
   */
  crystalCosts(deuteriumSynthesizerLvl: number = 0): number {
    return Math.floor(50 * Math.pow(1.5, deuteriumSynthesizerLvl));
  }
}
