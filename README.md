# mz-postprocessor-href-locate
编译a标签里的文件路径

```
fis.match('*.html',{
  postprocessor : fis.plugin('href-locate',{})
});
```

支持 smarty tpl 过滤

```
fis.match('*.tpl', {
    postprocessor: fis.plugin('href-locate',{
      'left_delimiter'  : '<{',
      'right_delimiter' : '}>'
    })
});
```