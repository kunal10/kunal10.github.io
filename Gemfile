source 'https://rubygems.org'

# Using Ruby 3.4.1 for local development and building
ruby '~> 3.4.1'

gem 'jekyll', '~> 4.3.3'  # Version compatible with Ruby 3.3.x

# jekyll-scholar and its dependencies
gem 'citeproc-ruby', '~> 1.1.0'
gem 'csl-styles', '~> 1.0.1'
gem 'i18n', '~> 1.8.0'  # Pinned to a version known to work with jekyll-scholar

# Core plugins that directly affect site building
group :jekyll_plugins do
    gem 'jekyll-jupyter-notebook', '~> 0.0.6'  # Latest available version
    gem 'jekyll-archives-v2'
    gem 'jekyll-email-protect'
    gem 'jekyll-feed'
    gem 'jekyll-get-json'
    gem 'jekyll-imagemagick'
    gem 'jekyll-link-attributes'
    gem 'jekyll-minifier'
    gem 'jekyll-paginate-v2'
    gem 'jekyll-regex-replace'
    gem 'jekyll-scholar'
    gem 'jekyll-sitemap'
    gem 'jekyll-tabs'
    gem 'jekyll-terser', :git => "https://github.com/RobertoJBeltran/jekyll-terser.git"
    gem 'jekyll-toc'
    gem 'jekyll-twitter-plugin'
    gem 'jemoji'

    gem 'classifier-reborn'  # used for content categorization during the build
end

# Gems for development or external data fetching (outside :jekyll_plugins)
group :other_plugins do
    gem 'css_parser'
    gem 'feedjira'
    gem 'httparty'
    gem 'observer'       # used by jekyll-scholar
    gem 'ostruct'        # used by jekyll-twitter-plugin
    # gem 'terser'         # used by jekyll-terser
    # gem 'unicode_utils' -- should be already installed by jekyll
    # gem 'webrick' -- should be already installed by jekyll
end
