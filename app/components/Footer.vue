<template>
  <footer>
    <div class="footer-top">
      <div class="footer-item">
        <div class="item-header">
          <span>CORPORATE</span>
          <span class="icon">icon</span>
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
          <span>SHOPPING</span>
          <span class="icon">icon</span>
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
          <span>LEGAL</span>
          <span class="icon">icon</span>
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
          <span>HELP CENTER</span>
          <span class="icon">icon</span>
        </div>
        <div class="item-content">
          <p>FAQ</p>
          <p>Contact center</p>
        </div>
      </div>
      <div class="footer-item info">
        <div class="item-header">
          <span>CONTACT US</span>
          <span class="icon">icon</span>
        </div>
        <div class="item-content">
          <div>
            <span>
              <img src="/images/footer/location.png" alt="" />
            </span>
            <p>
              Saray Mah. Site Yolu Cad. Anel İş Merkezi, D:No:5/4, 34768
              Ümraniye/İstanbul
            </p>
          </div>
          <div>
            <span>
              <img src="/images/footer/phone.png" alt="" />
            </span>
            <p>0850 755 9987</p>
          </div>
          <div>
            <span>
              <img src="/images/footer/mail.png" alt="" />
            </span>
            <p>info@watsons.com.tr</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <ul>
        <li><img src="/images/footer/facebook.png" alt="facebook logo" /></li>
        <li><img src="/images/footer/twitter.png" alt="twitter logo" /></li>
        <li><img src="/images/footer/instagram.png" alt="instagram logo" /></li>
        <li><img src="/images/footer/youtube.png" alt="youtube logo" /></li>
        <li><img src="/images/footer/pinterest.png" alt="pinterest logo" /></li>
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
  gap: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ececec;
}
.item-content div {
  display: flex;
  gap: 1rem;
}

.info {
  flex: 2.25;
}

.item-header {
  display: flex;
  justify-content: space-between;
}
.item-content {
  display: none;
  flex-direction: column;
  gap: 0.5rem;
  color: #485363;
  padding-bottom: 0.5rem;
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
  font-size: 10px;
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
}

@media (min-width: 1024px) {
  footer {
    padding: 48px 140px;
  }
  .footer-top {
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 2.5rem;
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
  }

  .footer-item {
    gap: 2rem;
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
}
</style>
