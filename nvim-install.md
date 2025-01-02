### How install NVim on Ubuntu and other Linux dist



## Pre-build arch

	curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim-linux64.tar.gz
	sudo rm -rf /opt/nvim
	sudo tar -C /opt -xzf nvim-linux64.tar.gz


Then add this to your shell config (~/.bashrc, ~/.zshrc, ...):
	
	export PATH="$PATH:/opt/nvim-linux64/bin"



## AppImage

	curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage
	chmod u+x nvim.appimage
	./nvim.appimage



## Expose nvim command globally

	./nvim.appimage --appimage-extract
	./squashfs-root/AppRun --version
	sudo mv squashfs-root /
	sudo ln -s /squashfs-root/AppRun /usr/bin/nvim
	nvim --version (to test)
