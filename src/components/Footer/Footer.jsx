import React from "react";

const Footer = () => {
  return (
    <footer class="flex flex-col bg-gray-950 px-6 py-12 text-gray-200 md:px-28 md:py-14">
      <div class="mx-auto flex w-full max-w-4xl flex-col gap-12 pb-10 lg:flex-row lg:justify-between">
        <div class="flex flex-col gap-5 border-white-950 border-opacity-10 md:flex-row md:justify-between lg:flex-col lg:border-b lg:border-none lg:pb-12">
          <div class="flex flex-col gap-5">
            <div>
              <img
                alt="Alchemy"
                loading="lazy"
                width="160"
                height="35"
                decoding="async"
                data-nimg="1"
                class="pointer-events-none h-fit w-40 select-none"
                style={{color:"transparent"}}
                src="https://www.datocms-assets.com/105223/1693931909-logo.svg"
              />
            </div>
            <p class="font-paragraph-size-200-medium">
              The web3 development platform
            </p>
            <div class="flex flex-wrap gap-3">
              <a
                href="https://twitter.com/AlchemyPlatform"
                target="_blank"
                class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all hover:text-gray-500"
              >
                <img
                  alt="X Logo"
                  loading="lazy"
                  width="16"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-fit"
                  style={{color:"transparent"}}
                  src="https://www.datocms-assets.com/105223/1701808049-twitter.svg"
                />
              </a>
              <a
                href="https://linkedin.com/company/alchemyinc/"
                target="_blank"
                class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all hover:text-gray-500"
              >
                <img
                  alt="LinkedIn Logo"
                  loading="lazy"
                  width="16"
                  height="15"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-fit"
                  style={{color:"transparent"}}
                  src="https://www.datocms-assets.com/105223/1701808018-linkedin.svg"
                />
              </a>
              <a
                href="https://www.youtube.com/c/alchemyplatform"
                target="_blank"
                class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all hover:text-gray-500"
              >
                <img
                  alt="youtube play button"
                  loading="lazy"
                  width="1024"
                  height="721"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-fit"
                  style={{color:"transparent"}}
                  src="https://www.datocms-assets.com/105223/1705900163-youtube-play-button-dark.svg"
                />
              </a>
              <a
                href="https://discord.com/invite/alchemyplatform"
                target="_blank"
                class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all hover:text-gray-500"
              >
                <img
                  alt="discord logo"
                  loading="lazy"
                  width="127"
                  height="96"
                  decoding="async"
                  data-nimg="1"
                  class="h-4 w-fit"
                  style={{color:"transparent"}}
                  src="https://www.datocms-assets.com/105223/1705900260-discord-mark-black.svg"
                />
              </a>
            </div>
          </div>
          <div class="lg:mt-24">
            <h2 class="font-heading-size-100-bold text-gray-50">
              Supercharge your inbox
            </h2>
            <p class="font-paragraph-size-200-medium pb-3 pt-1">
              Sign up for our developer newsletter.
            </p>
            <a data-testid="navigation-link" class="w-full" href="/newsletter">
              <button class="w-full group relative h-fit rounded-lg transition-all focus:shadow-purple pointer-events-auto">
                <span class="flex flex-row items-center justify-center gap-2 rounded-lg transition-all bg-gray-100 text-gray-700 hover:text-gray-500 active:bg-gray-50 active:bg-gradient-to-br active:from-gradient-vibrant-blue-100 active:to-gradient-vibrant-blue-200 active:bg-clip-text active:text-transparent active:shadow-gray-lg font-button-size-200 px-4 py-3">
                  Subscribe
                </span>
              </button>
            </a>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-14 sm:mb-10 lg:mb-0 xl:grid-cols-3">
          <div class="flex flex-col gap-4">
            <h2 class="font-eyebrow-size-100-bold text-gray-50">Products</h2>
            <ul class="flex flex-col gap-2">
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/supernode"
                >
                  <span>Supernode</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/nft-api"
                >
                  <span>NFT API</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/webhooks"
                >
                  <span>Webhooks</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/custom-webhooks"
                >
                  <span>Custom Webhooks</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/smart-websockets"
                >
                  <span>Websockets</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/subgraphs"
                >
                  <span>Subgraphs</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/transfers-api"
                >
                  <span>Transfers API</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/token-api"
                >
                  <span>Token API</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/transact"
                >
                  <span>Transact</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/transaction-simulation"
                >
                  <span>Transaction Simulation</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/account-kit"
                >
                  <span>Account Kit</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/account-abstraction-infrastructure"
                >
                  <span>Bundler API</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/account-abstraction-infrastructure"
                >
                  <span>Gas Manager API</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://spearmint.xyz/"
                >
                  <span>Spearmint</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-4">
            <h2 class="font-eyebrow-size-100-bold text-gray-50">Company</h2>
            <ul class="flex flex-col gap-2">
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/company"
                >
                  <span>About us</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/careers"
                >
                  <span>Careers</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/case-studies"
                >
                  <span>Customers</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/newsroom"
                >
                  <span>Newsroom</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/brand"
                >
                  <span>Press Kit</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/security"
                >
                  <span>Security</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/terms-conditions/terms"
                >
                  <span>Terms of Service</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/terms-conditions/dapp-store-terms-of-use"
                >
                  <span>Dapp Store Terms</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/terms-conditions/privacy-policy"
                >
                  <span>Privacy Policy</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-4">
            <h2 class="font-eyebrow-size-100-bold text-gray-50">Contact</h2>
            <ul class="flex flex-col gap-2">
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  href="/contact-sales"
                >
                  <span>Sales</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:press@alchemy.com"
                >
                  <span>Press</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:support@alchemy.com"
                >
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  data-testid="navigation-link"
                  class="font-paragraph-size-200-medium w-fit text-gray-200 transition-all hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.com/invite/alchemyplatform"
                >
                  <span>Discord</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mx-auto flex w-full max-w-4xl flex-col items-start gap-6 border-white-950 border-opacity-30 md:flex-row md:items-center md:justify-between md:gap-8 lg:justify-end lg:border-t lg:pt-9">
        <p class="font-paragraph-size-100-medium text-gray-200">
          2024 Alchemy Insights, Inc.<span> · </span>
          <a
            data-testid="navigation-link"
            target="_blank"
            rel="noopener noreferrer"
            href="/terms-conditions/terms"
          >
            <span>Terms of service</span>
          </a>
        </p>
        <a
          target="_blank"
          class="font-button-size-100 rounded-lg bg-gray-100 px-4 py-3 text-gray-700"
          href="https://docs.alchemy.com/docs/alchemy-verified-badge"
        >
          Powered by Alchemy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
