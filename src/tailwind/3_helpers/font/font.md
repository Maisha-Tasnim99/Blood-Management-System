











&nbsp;

### Font Family Classes

&nbsp;



1. `font-sans`

   

   - Use `font-sans` to apply a sans-serif font family. For sans-serif, we have selected **Source Sans Pro**.   

   - Use this class as the default class for any language.

   

2. `font-mono`

   


   - Use `font-mono` to apply a monospaced  font family. For sans-serif, we have selected **Source Code Pro**.

   


3. `font-cursive-1`, `font-cursive-2`, `font-cursive-3`, `font-cursive-4`

   

   - Use any of the above 4 classes to apply a cursive  font family.



4. `font-cursive-bangla`

   

  - Use  the above class to apply a cursive  font family to the Bengali writings.



   

5. `font-handwriting`
   
   
  - Use  the above class to apply a handwritten type of  font family.





```markdown
All the font family classes are made in `tailwind.config.js` file
```


&nbsp;
### Font Width Classes
&nbsp;



- All the fonts that we are using have been imported from the google font. 
- We have just imported different font weights  for `font-sans` & `font-mono` classes from the google font.

 

1. `font-200`, `font-300`, `font-400`, `font-600` , `font-700`



We will be able to use the above 5 classes to tweak the font-width while using font-family classes of `font-sans` & `font-mono` 



2. 

For other font family, we haven't imported nothing more than the default font-weight. So, in this case, we can use inline style in the following way:

```html
      <p style="font-weight: 100;">Font weight is 100</p>
      <p style="font-weight: 200;">Font weight is 200</p>
      <p style="font-weight: 300;">Font weight is 300</p>
      <p style="font-weight: 400;">Font weight is 400</p>
      <p style="font-weight: 500;">Font weight is 500</p>
      <p style="font-weight: 600;">Font weight is 600</p>
      <p style="font-weight: 700;">Font weight is 700</p>
      <p style="font-weight: 800;">Font weight is 800</p>
      <p style="font-weight: 900;">Font weight is 900</p>
```



- To stay concise, let's use only these font-weights:  300, 500, 600 & 700

- 400 is default font-weight. So, we don't need to specify that.

  

  ```html
    
    <p style="font-weight: 300;">Font weight is 300. We can also think it as light.</p>
  
    <p>Font weight is 400. This is the default font-weight.  We can also think it as normal. </p>
  
    <p style="font-weight: 500;">Font weight is 500. We can also think it as medium.  </p>
  
    <p style="font-weight: 600;">Font weight is 600. We can also think it as semibold.</p>
  
    <p style="font-weight: 700;">Font weight is 700. We can also think it as bold.</p>
  
  ```

  

  

```markdown
All the font width classes are made in `tailwind.config.js` file
```





&nbsp;

### Font Size Classes

&nbsp;



1. **Heading Classes:** `-h1` , `-h2` ,`-h3`, `-h4`, `-h5`, `-h6`
2. **Paragraph Classes:** `-p`
3. **Title Classes**: `title-1`, `title-2`, `title-3`



- font-size of `-p` (paragraph) is larger than `-h5` & `-h6` but smaller than `-h4` ,`-h3`,`-h2`,`-h1`.
- font-size of `-title-1`, `-title-2` & `-title-3` is larger than any heading.



```markdown
All the font width classes are made in the `*.css` file
```

