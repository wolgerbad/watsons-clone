<template>
  <footer>
    <div class="footer-top">
      <div class="footer-item">
        <div class="item-header">
          <span class="item-title">CORPORATE</span>
          <span class="icon">
            <img src="/images/footer/bottom-arrow.svg" alt="arrow bottom" />
          </span>
        </div>
        <div class="item-content">
          <p>About us</p>
          <p>Press</p>
          <p>Human resources</p>
          <p>News from us</p>
        </div>
      </div>
      <div class="footer-item">
        <div class="item-header">
          <span class="item-title">SHOPPING</span>
          <span class="icon">
            <img src="/images/footer/top-arrow.svg" alt="arrow bottom" />
          </span>
        </div>
        <div class="item-content show">
          <p>Order and Payment</p>
          <p>Cancellation and Refund</p>
          <p>Delivery Conditions</p>
          <p>Secure shopping</p>
        </div>
      </div>
      <div class="footer-item">
        <div class="item-header">
          <span class="item-title">LEGAL</span>
          <span class="icon">
            <img src="/images/footer/bottom-arrow.svg" alt="arrow bottom" />
          </span>
        </div>
        <div class="item-content">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Membership Agreement</p>
          <p>Distance Selling Contract</p>
        </div>
      </div>
      <div class="footer-item">
        <div class="item-header">
          <span class="item-title">HELP CENTER</span>
          <span class="icon">
            <img src="/images/footer/bottom-arrow.svg" alt="arrow bottom" />
          </span>
        </div>
        <div class="item-content">
          <p>FAQ</p>
          <p>Contact center</p>
        </div>
      </div>
      <div class="footer-item info">
        <div class="item-header">
          <span class="item-title">CONTACT US</span>
          <span class="icon">
            <img src="/images/footer/bottom-arrow.svg" alt="arrow bottom" />
          </span>
        </div>
        <div class="item-content">
          <div>
            <span>
              <img src="/images/footer/location.svg" alt="location icon" />
            </span>
            <p>
              Saray Mah. Site Yolu Cad. Anel İş Merkezi, D:No:5/4, 34768
              Ümraniye/İstanbul
            </p>
          </div>
          <div>
            <span>
              <img src="/images/footer/phone.svg" alt="phone icon" />
            </span>
            <p>0850 755 9987</p>
          </div>
          <div>
            <span>
              <img src="/images/footer/mail.svg" alt="mail icon" />
            </span>
            <p>info@watsons.com.tr</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <ul>
        <li><img src="/images/footer/facebook.svg" alt="facebook logo" /></li>
        <li><img src="/images/footer/twitter.svg" alt="twitter logo" /></li>
        <li><img src="/images/footer/instagram.svg" alt="instagram logo" /></li>
        <li><img src="/images/footer/youtube.svg" alt="youtube logo" /></li>
        <li><img src="/images/footer/pinterest.svg" alt="pinterest logo" /></li>
      </ul>
      <div class="copyright copyright-mobile">
        <p>© Watsons 2021 all rights reserved</p>
        <p>a member of ck hutchison holdings</p>
      </div>
      <div class="copyright copyright-desktop">
        <p>
          © Watsons 2021 all rights reserved | a member of ck hutchison holdings
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 1rem;
}

.footer-top {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-bottom: 1.5rem;
}
.footer-item {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 1px solid rgb(var(--smoke));
}
.item-content div {
  display: flex;
  gap: 1rem;
}

.info {
  flex: 2.25;
}

.item-header {
  color: #2a2a48;
  display: flex;
  align-items: center;
  font-size: var(--text-xs);
  font-weight: 500;
  justify-content: space-between;
  padding-block: 0.5rem;
}
.item-content {
  display: none;
  font-size: var(--text-xs);
  font-weight: 400;
  flex-direction: column;
  gap: 1rem;
  color: #485363;
  padding-bottom: 0.5rem;
}

.item-title {
  padding-block: 4px;
  line-height: 1rem;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-bottom ul {
  display: flex;
  gap: 1.5rem;
  list-style-type: none;
  padding-inline: 43.5px;
}

.copyright {
  font-size: 0.625rem;
  text-transform: uppercase;

  font-weight: 500;
  color: #8493a8;
}

.copyright-mobile {
  text-align: center;
}

.copyright-desktop {
  display: none;
}

.show {
  display: flex;
  padding-bottom: 1rem;
}

.footer-bottom li {
  line-height: 0;
}

@media (min-width: 1024px) {
  footer {
    padding: 48px 140px;
  }
  .footer-top {
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    order: 2;
  }

  .copyright {
    order: 1;
  }
  .copyright-mobile {
    display: none;
  }
  .copyright-desktop {
    display: block;
    padding-block: 0.5rem;
  }

  .footer-item {
    gap: 2rem;
  }

  .item-title {
    padding-block: 0;
  }

  .item-content {
    display: flex;
  }
  .icon {
    display: none;
  }
  .footer-item {
    border: none;
  }
  .item-header {
    padding-block: 0;
  }
}
</style>
