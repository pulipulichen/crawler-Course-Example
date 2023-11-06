FROM pudding/github-action-app:puppeteer-python-14-action-rss-20230826-1641

RUN npm link axios@1.4.0
RUN npm link jsdom@16.5.0