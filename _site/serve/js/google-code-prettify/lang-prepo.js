PR.registerLangHandler(PR.sourceDecorator({
        keywords: (
            'abstract and array as break case catch class clone const continue declare'
            +
            'default do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final'
            +
            'for foreach function global goto if implements interface instanceof namespace new or private'
            +
            'protected public static switch throw try use var while xor'
            +
            '__CLASS__ __DIR__ __FILE__ __LINE__ __FUNCTION__ __METHOD__ __NAMESPACE__'
            +
            'die echo empty exit eval include include_once isset list require require_once return print unset'
           ),
        cStyleComments: true
      }), ['prepro']);