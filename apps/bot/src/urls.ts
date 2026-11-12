function doodleJumpGameUrl(webAppUrl: string): string {
  if (!webAppUrl) return "";
  if (webAppUrl.endsWith("/doodle-jump")) return `${webAppUrl}/`;
  if (webAppUrl.endsWith("/karate") || webAppUrl.endsWith("/city-strike")) {
    return webAppUrl.replace(/\/(karate|city-strike)$/, "/doodle-jump/");
  }
  return `${webAppUrl}/doodle-jump/`;
}

function cityStrikeGameUrl(webAppUrl: string): string {
  return doodleJumpGameUrl(webAppUrl);
}

export function resolveWebAppUrls(webAppUrlRaw: string | undefined): {
  webAppUrl: string;
  miniAppUrl: string;
  karateUrl: string;
  cityStrikeUrl: string;
  shopUrl: string;
  airHockeyUrl: string;
} {
  const webAppUrl = webAppUrlRaw?.trim().replace(/\/?$/, "") ?? "";
  const gameUrl = doodleJumpGameUrl(webAppUrl);
  return {
    webAppUrl,
    miniAppUrl: appUrl(webAppUrl),
    karateUrl: gameUrl,
    cityStrikeUrl: gameUrl,
    shopUrl: shopUrl(webAppUrl),
    airHockeyUrl: gameUrl,
  };
}

function appUrl(webAppUrl: string): string {
  if (!webAppUrl) return "";
  if (webAppUrl.endsWith("/app")) return `${webAppUrl}/`;
  return `${webAppUrl}/app/`;
}

function shopUrl(webAppUrl: string): string {
  if (!webAppUrl) return "";
  const base = appUrl(webAppUrl);
  return base ? `${base}shop/` : "";
}

export { appUrl, shopUrl, doodleJumpGameUrl as karateGameUrl, cityStrikeGameUrl };
