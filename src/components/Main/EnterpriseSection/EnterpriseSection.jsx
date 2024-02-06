import React from "react";

const EnterpriseSection = () => {
  return (
    <section className="relative flex flex-col gap-14 overflow-hidden px-6 xl:px-0 py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white-950 to-transparent">
        <div className="relative z-10 mx-auto w-full max-w-[1170px] bg-transparent">
            <div class="flex h-fit w-full flex-col items-center self-end overflow-hidden rounded-2xl border border-gray-200 shadow-gray-xl md:col-span-2 lg:col-span-3">
              <div class="relative flex grid-cols-[25%,1fr] flex-col gap-8 bg-gradient-to-br from-[#a737ff] from-20% to-[#04baf3] p-10 text-white md:grid lg:gap-24">
                <div class="pointer-events-none absolute inset-0 hidden bg-[url(/svg/diamond.svg)] bg-right-bottom bg-no-repeat lg:block"></div>
                <div class="flex flex-col gap-4">
                  <span class="font-stat-300-semibold">Enterprise</span>
                  <div class="font-paragraph-size-400-medium text-gray-200">
                    <p>
                      For organizations who need custom throughput and world class
                      support
                    </p>
                  </div>
                  <a data-testid="navigation-link" class="w-full" href="/contact-sales">
                    <button class="w-full group relative h-fit rounded-lg transition-all focus:shadow-purple pointer-events-auto">
                      <span class="flex flex-row items-center justify-center gap-2 rounded-lg transition-all bg-gray-100 text-gray-700 hover:text-gray-500 active:bg-gray-50 active:bg-gradient-to-br active:from-gradient-vibrant-blue-100 active:to-gradient-vibrant-blue-200 active:bg-clip-text active:text-transparent active:shadow-gray-lg font-button-size-200 px-4 py-3">
                        Get in touch
                      </span>
                    </button>
                  </a>
                </div>
                <ul class="font-paragraph-size-300-medium flex grid-cols-2 flex-col gap-4 gap-x-10 md:grid">
                  <li class="flex items-center gap-2.5">
                    <img
                      alt="Horizontal price card icon"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      style={{color:"transparent"}}
                      src="https://www.datocms-assets.com/105223/1699520633-message-chat-01.svg"
                    />
                    <span class="">24/7 engineering team access</span>
                  </li>
                  <li class="flex items-center gap-2.5">
                    <img
                      alt="Horizontal price card icon"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      style={{color:"transparent"}}
                      src="https://www.datocms-assets.com/105223/1699520629-coin-hand-1.svg"
                    />
                    <span class="">Custom on-demand discounts</span>
                  </li>
                  <li class="flex items-center gap-2.5">
                    <img
                      alt="Horizontal price card icon"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      style={{color:"transparent"}}
                      src="https://www.datocms-assets.com/105223/1699520635-user-profile-02-1.svg"
                    />
                    <span class="">24/7 VIP support channels</span>
                  </li>
                  <li class="flex items-center gap-2.5">
                    <img
                      alt="Horizontal price card icon"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      style={{color:"transparent"}}
                      src="https://www.datocms-assets.com/105223/1699520628-chevron-double-up.svg"
                    />
                    <span class="">Committed response time SLAs</span>
                  </li>
                  <li class="flex items-center gap-2.5">
                    <img
                      alt="Horizontal price card icon"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      style={{color:"transparent"}}
                      src="https://www.datocms-assets.com/105223/1699520632-lightning-02.svg"
                    />
                    <span class="">SSO / auth management access</span>
                  </li>
                  <li class="flex items-center gap-2.5">
                    <img
                      alt="Horizontal price card icon"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      style={{color:"transparent"}}
                      src="https://www.datocms-assets.com/105223/1699520632-lightning-02.svg"
                    />
                    <span class="">Prioritized alpha / beta access</span>
                  </li>
                  <li class="flex items-center gap-2.5">
                    <img
                      alt="Horizontal price card icon"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      style={{color:"transparent"}}
                      src="https://www.datocms-assets.com/105223/1699520629-coin-hand-1.svg"
                    />
                    <span class="">Committed usage discounts</span>
                  </li>
                  <li class="flex items-center gap-2.5">
                    <img
                      alt="Horizontal price card icon"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      style={{color:"transparent"}}
                      src="https://www.datocms-assets.com/105223/1699520632-lightning-02.svg"
                    />
                    <span class="">Custom throughput</span>
                  </li>
                  <li class="flex items-center gap-2.5">
                    <img
                      alt="Horizontal price card icon"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      style={{color:"transparent"}}
                      src="https://www.datocms-assets.com/105223/1699520626-apps.svg"
                    />
                    <span class="">Unlimited apps</span>
                  </li>
                  <li class="flex items-center gap-2.5">
                    <img
                      alt="Horizontal price card icon"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      style={{color:"transparent"}}
                      src="https://www.datocms-assets.com/105223/1699520630-currency-bitcoin.svg"
                    />
                    <span class="">Pay in crypto</span>
                  </li>
                  <li class="flex items-center gap-2.5">
                    <img
                      alt="Horizontal price card icon"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      style={{color:"transparent"}}
                      src="https://www.datocms-assets.com/105223/1699520636-volume-05.svg"
                    />
                    <span class="">Dedicated marketing support</span>
                  </li>
                  <li class="flex items-center gap-2.5">
                    <img
                      alt="Horizontal price card icon"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      style={{color:"transparent"}}
                      src="https://www.datocms-assets.com/105223/1699520632-lightning-02.svg"
                    />
                    <span class="">Custom terms</span>
                  </li>
                </ul>
              </div>
              <div class="flex w-full items-center gap-8 bg-white-950 px-6 py-3 md:hidden">
                <div class="mx-auto flex items-center gap-2.5 py-1.5">
                  <img
                    alt="Zapper"
                    loading="lazy"
                    width="109"
                    height="49"
                    decoding="async"
                    data-nimg="1"
                    class="max-h-10 w-fit object-contain"
                    style={{color:"transparent"}}
                    src="https://www.datocms-assets.com/105223/1699521399-zapper.svg"
                  />
                </div>
                <div class="mx-auto flex items-center gap-2.5 py-1.5">
                  <img
                    alt="Open sea"
                    loading="lazy"
                    width="141"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    class="max-h-10 w-fit object-contain"
                    style={{color:"transparent"}}
                    src="https://www.datocms-assets.com/105223/1699428196-opensea-black.svg"
                  />
                </div>
                <div class="mx-auto flex items-center gap-2.5 py-1.5">
                  <img
                    alt="gmx-logo"
                    loading="lazy"
                    width="165"
                    height="55"
                    decoding="async"
                    data-nimg="1"
                    class="max-h-10 w-fit object-contain"
                    style={{color:"transparent"}}
                    src="https://www.datocms-assets.com/105223/1705721584-gmx.svg"
                  />
                </div>
              </div>
              <div class="hidden w-full items-center gap-8 bg-white-950 px-12 py-6 md:flex lg:gap-20">
                <div class="flex items-center gap-2.5 py-1.5">
                  <img
                    alt="Zapper"
                    loading="lazy"
                    width="109"
                    height="49"
                    decoding="async"
                    data-nimg="1"
                    class="max-h-10 w-fit object-contain"
                    style={{color:"transparent"}}
                    src="https://www.datocms-assets.com/105223/1699521399-zapper.svg"
                  />
                </div>
                <div class="flex items-center gap-2.5 py-1.5">
                  <img
                    alt="Open sea"
                    loading="lazy"
                    width="141"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    class="max-h-10 w-fit object-contain"
                    style={{color:"transparent"}}
                    src="https://www.datocms-assets.com/105223/1699428196-opensea-black.svg"
                  />
                </div>
                <div class="flex items-center gap-2.5 py-1.5">
                  <img
                    alt="gmx-logo"
                    loading="lazy"
                    width="165"
                    height="55"
                    decoding="async"
                    data-nimg="1"
                    class="max-h-10 w-fit object-contain"
                    style={{color:"transparent"}}
                    src="https://www.datocms-assets.com/105223/1705721584-gmx.svg"
                  />
                </div>
                <div class="flex items-center gap-2.5 py-1.5">
                  <img
                    alt="Shopify"
                    loading="lazy"
                    width="158"
                    height="56"
                    decoding="async"
                    data-nimg="1"
                    class="max-h-10 w-fit object-contain"
                    style={{color:"transparent"}}
                    src="https://www.datocms-assets.com/105223/1697533686-shopify.svg"
                  />
                </div>
                <div class="  flex items-center gap-2.5 py-1.5">
                <img
                    alt="GameStop"
                    loading="lazy"
                    width="142"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    class="max-h-10 w-[120px] object-contain"
                    style={{color:"transparent"}}
                    src="https://www.datocms-assets.com/105223/1705723142-gamestop.svg"
                  />
                </div>
                <div class="flex items-center gap-2.5 py-1.5">
                  <img
                    alt="GameStop"
                    loading="lazy"
                    width="142"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    class="max-h-10 w-fit object-contain"
                    style={{color:"transparent"}}
                    src="https://www.datocms-assets.com/105223/1705723142-gamestop.svg"
                  />
                </div>
              </div>
            </div>
        </div>
    </section>
  );
};

export default EnterpriseSection;
