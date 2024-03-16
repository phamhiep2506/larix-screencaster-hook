# Larix screencaster premium
[![get it on](https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0)](https://play.google.com/store/apps/details?id=com.wmspanel.larix_screencaster)

## Start hook
- Download [frida-server](https://github.com/frida/frida) and save to `/data/local/tmp`

- Run frida-server on android device
```bash
$ ./frida-server -l 0.0.0.0
```

- Run frida on linux or android
```bash
$ frida -H 192.168.195.133 -f com.wmspanel.larix_screencaster -l hook.js
```
![frida-com wmspanel larix_screecaster](https://github.com/phamhiep2506/larix-screencaster-hook/assets/64464369/3070c6e2-bad1-4487-bb81-4d738ce3eec9)

## Screenshots
- Active
![active](https://github.com/phamhiep2506/larix-screencaster-hook/assets/64464369/a3d56035-9391-4014-b924-01321f43be43)

- No active
![noactive](https://github.com/phamhiep2506/larix-screencaster-hook/assets/64464369/994aa17e-e54d-4e30-a434-c7cf7f926549)
