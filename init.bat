CHCP 65001
@echo off

(
	@REM echo var boyBodyList = [
	@REM for %%i in (./img/body/boy/*.png) do (echo 	"%%i",)
	@REM echo ]
	
	echo var iconList = [

	setlocal enabledelayedexpansion
	for /r .\img\boy %%i in (icon\*.png) do (
		set s=%%i
		set s=!s:%~dp0=!
		set s=!s:\=/!
		echo 	'!s!',
	)

	for /r .\img\girl %%i in (icon\*.png) do (
		set s=%%i
		set s=!s:%~dp0=!
		set s=!s:\=/!
		echo 	'!s!',
	)

	echo ]
) > ./js/list.js
