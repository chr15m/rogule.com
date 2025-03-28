STATIC=public/*.html public/css public/*.png public/sw.js public/manifest.json # public/images public/assets
BRANCH=$(shell git branch | grep '^*' | colrm 1 2)
ZIPNAME=rogule
GITHASH = $(shell git rev-parse HEAD | cut -b -8)

all: build build/server.js

cloc:
	git cloc --exclude-ext=js

$(ZIPNAME).zip: build
	ln -s build/public $(ZIPNAME)
	zip $@ `git ls-tree -r $(BRANCH) --name-only build/public | sed -e 's/build\/public/$(ZIPNAME)/'`
	rm $(ZIPNAME)

build/server.js: src/**/*.cljs shadow-cljs.edn node_modules
	npx shadow-cljs release server --debug

build: src/**/* $(STATIC) node_modules
	mkdir -p build/public
	cp -LR --preserve=all $(STATIC) build/public
	sed -i 's/\.js"/.js?$(GITHASH)"/g' build/public/game.html
	npx shadow-cljs release app
	touch build

node_modules: package.json
	pnpm i --shamefully-hoist
	touch node_modules

.PHONY: watch watcher server repl clean

server: node_modules
	@echo "waiting for devserver.js to appear."
	@rm -f devserver.js; until [ -f devserver.js -a -d .shadow-cljs ]; do sleep 1; done; echo "devserver.js appeared. starting."
	@sleep 1 && while [ 1 ]; do DEV=1 node devserver.js; sleep 3; echo "restarting devserver.js"; done

watcher:
	npx shadow-cljs watch server app test

watch:
	make -j2 watcher server

repl:
	npx shadow-cljs cljs-repl app

clean:
	rm -rf .shadow-cljs devserver.js server.js build node_modules package-lock.json
