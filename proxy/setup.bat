@echo off
cls
SET var=%cd%
cd C:\Users\Administrator\Downloads
nuget restore %var%\proxy\proxy.sln
