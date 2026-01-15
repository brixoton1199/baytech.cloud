export const CompanyProfilePage = () => {
  const page = document.createElement('div')
  page.className = 'page-container'
  
  page.innerHTML = `
    <div class="company-profile-page">
      <div class="company-profile-header">
        <h1>Company Profile</h1>
        <p class="section-subtitle">Baytech.cloud Strategy Presentation</p>
      </div>
      
      <div class="presentation-container">
        <iframe 
          src="https://view.officeapps.live.com/op/embed.aspx?src=https://baytech.cloud/assets/Baytech.cloud%20Strategy%20Presentation.pptx"
          width="100%" 
          height="600px" 
          frameborder="0"
          allowfullscreen="true"
          title="Baytech Company Profile Presentation"
          class="presentation-iframe">
          <p>Your browser does not support iframes. <a href="/assets/Baytech.cloud Strategy Presentation.pptx" download>Download the presentation</a></p>
        </iframe>
        
        <div class="presentation-actions">
          <a href="/assets/Baytech.cloud Strategy Presentation.pptx" download class="btn-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Presentation
          </a>
        </div>
      </div>
    </div>
  `
  
  return page
}
