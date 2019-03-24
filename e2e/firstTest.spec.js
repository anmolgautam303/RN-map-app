describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have add marker button initially', async () => {
    await expect(element(by.id('button-add-marker'))).toBeVisible();
  });

  it('should have map initially', async () => {
    await expect(element(by.id('map'))).toBeVisible();
  });

  it('should show Touch map to add marker text after tap', async () => {
    await element(by.id('button-add-marker-text')).tap();
    await expect(element(by.text('Touch map to add marker'))).toBeVisible();
  });

  it('should show Click here to add Marker text after taping twice', async () => {
    await element(by.id('button-add-marker-text')).tap();
    await element(by.id('button-add-marker-text')).tap();
    await expect(element(by.text('Click here to add Marker'))).toBeVisible();
  });

  it('should show Are you sure text', async () => {
    await element(by.id('button-delete-0')).tap();
    await expect(element(by.text('Are you sure'))).toBeVisible();
  });
});
