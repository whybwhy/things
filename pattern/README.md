## Pattern

https://www.zerocho.com/ javascript pattern 강좌보면서 이해한대로 정리.
pattern은 알면 알수록 매력이 있는데 실무에서 의도적으로 사용하지 않는 이상 사용할 빈도수가 많지 않아 (나만 그런건지...) 잊어버리기 쉽상이다.
자주 꺼내서 쓰는 수 밖에 없다. 외우기가 참 고역이다.

### configuration
<pre>
> npm install -g --save typescript
> tsc --init # tsconifg.json 생성
> npm install -g --save @types/node
</pre>

#### use case
<pre>
> tsc pattern_mediator
> node pattern_mediator
</pre>

##### 위와 같이 transpile 해도 되지만 아래와 같이 설정하면 편리하다 
<pre>

# webstrom configuration
> webstrom typescript preferences 에서 enable, recomplie 옵션 처리 

# tslint 사용
> sudo npm install tslint --save -g
> tslint --init #tslint.json 생성
</pre>

참고
[Typescript](https://moon9342.github.io/typescript-introduction)
[개인 typescript configuration](https://vomvoru.github.io/blog/tsconfig-compiler-options-kr/)
[공식 typescript configuration](https://typescript-kr.github.io/pages/tsconfig.json.html)

