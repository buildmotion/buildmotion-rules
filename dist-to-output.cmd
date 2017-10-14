REM %1 --> VERSION.
REM Example: buildmotion-alert-%1 becomes buildmotion-alert-1.0.0
xcopy dist\*.* ..\..\output\buildmotion-rules\buildmotion-rules-%1\ /s
