// ============================================================
// VOC SYSTEM CONFIG
// One place to point every VOC form at your Power Automate flow.
// See SETUP-GUIDE.md for how to create this flow in 10 minutes.
// ============================================================

window.VOC_CONFIG = {
  // Paste the "HTTP POST URL" from your Power Automate
  // "When an HTTP request is received" trigger here once you've built it.
  // Leave blank while testing locally — the form will fall back to
  // downloading a JSON file instead of submitting, so no data is lost.
  submitUrl: "https://default7bf668ccdb6040b8ba089102336e87.a3.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/21/workflows/0f8f24a9e01d45a88b1f39ba0b8be87f/triggers/manual/paths/invoke?api-version=1",

  // Optional: shown in the header of every VOC form.
  companyName: "Besteel Frames",
  logoUrl: "assets/img/besteel-icon.png"
};

// ============================================================
// STATIONERY ORDER CONFIG
// Separate Power Automate flow from the VOC one above — see
// SETUP-GUIDE.md for the suggested SharePoint list + email setup.
// ============================================================
window.STATIONERY_CONFIG = {
  submitUrl: "https://default7bf668ccdb6040b8ba089102336e87.a3.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/21/workflows/0f8f24a9e01d45a88b1f39ba0b8be87f/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=uvGIdrlKwubVZxUyObqkS6SLUDrmWdk66pdDVzGeZKM",
  companyName: "Besteel Frames",
  logoUrl: "assets/img/besteel-icon.png"
};
