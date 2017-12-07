@echo off
cls
SET var=%cd%
cd C:\Users\Administrator\Downloads
nuget restore $Source.tti_global_repo$\proxy\proxy.sln

cd C:\Windows\Microsoft.NET\Framework\v4.0.30319\
msbuild $Source.tti_global_repo$\proxy\proxy.sln
