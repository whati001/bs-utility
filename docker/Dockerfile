FROM alpine:latest

ARG botpress=https://github.com/botpress/botpress.git
ARG custom=https://github.com/whati001/bs-utility.git

# Install missing deps
RUN apk upgrade --no-cache -U && \
  apk add --no-cache git tmux nodejs npm yarn

# Clone botpress and custom-module repo
RUN cd / && \
  git clone $botpress && \
  cd /botpress/modules/ && \
  git clone $custom

# Build ones the repository
RUN cd /botpress && \
  yarn install

RUN cd /botpress && \
  yarn build

# Link modules
RUN cd /botpress && \
  yarn cmd dev:modules

# Fix some issues
RUN cd /botpress && \
  cp -r build/native-extensions/linux/alpine_3_11/ build/native-extensions/linux/raspbian/
EXPOSE 3000
EXPOSE 3001 

CMD /bin/sh
