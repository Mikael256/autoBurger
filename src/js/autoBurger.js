class AutoBurger{
  constructor($target, stillClass, hoverClass, triggeredHoverClass, triggeredClass)
  {
    this.$target = $target;
    this.stillClass = stillClass;
    this.hoverClass = hoverClass;
    this.triggeredHoverClass = triggeredHoverClass;
    this.triggeredClass = triggeredClass;
    this.hoverCallback = undefined;
    this.hoverOffCallback = undefined;
    this.clickCallback = undefined;
    this.triggeredCallback = undefined;
    this.untriggeredCallback = undefined;
    this.opened = false;

    this.fillTarget();
    this.$target.addClass(this.stillClass);
    this.$target.addClass("autoBurger");
  }

  fillTarget()
  {
    this.$target.html('<div class="burgerBar burgerBar-hi"></div></div>' +
      '<div class="burgerBar burgerBar-md"></div></div>' +
      '<div class="burgerBar burgerBar-lo"></div></div>');
  }
  setBehaviour()
  {
    //click event
    this.$target.click(()=>{
      this.opened = !this.opened;
      if (this.clickCallback)
        this.clickCallback();
      if(this.opened)
      {
        this.$target.addClass(this.triggeredClass);
        if (this.triggeredCallback)
          this.triggeredCallback();
      }
      else
      {
        this.$target.removeClass(this.triggeredClass);
        if (this.untriggeredCallback)
          this.untriggeredCallback();
      }
    });
    //hover event
    this.$target.hover(()=>{
      if (this.hoverCallback)
        this.hoverCallback();

      // this.$target.addClass(this.hoverClass);
      this.$target.removeClass(this.stillClass);
      this.$target.removeClass(this.triggeredClass);
      if(this.opened)
      {
        this.$target.removeClass(this.hoverClass);
        this.$target.addClass(this.triggeredHoverClass);
      }
      else
      {
        this.$target.removeClass(this.triggeredHoverClass);
        this.$target.addClass(this.hoverClass);
      }
    }, ()=>{
      if (this.hoverOffCallback)
        this.hoverOffCallback();
      this.$target.removeClass(this.hoverClass);
      this.$target.removeClass(this.triggeredHoverClass);

      if(this.opened)
      {
        this.$target.removeClass(this.stillClass);
        this.$target.addClass(this.triggeredClass);
      }
      else{
        this.$target.removeClass(this.triggeredClass);
        this.$target.addClass(this.stillClass);
      }
    });
  }
}

// if(true)
if ($("body").data("autoburger"))
{
  console.log("test");
  var $autoBurger = $(".autoburger");
  $(".autoBurger").each(function(){
    var newBurger = new AutoBurger($(this),
      $(this).data("still"),
      $(this).data("hover"),
      $(this).data("triggered-hover"),
      $(this).data("triggered"));
    var panelTarget = $(this).data("target");
    if (panelTarget)
    {
      newBurger.triggeredCallback = () =>
      {
        $(panelTarget).fadeIn();
      };
      newBurger.untriggeredCallback = () =>
      {
        $(panelTarget).fadeOut();
      };
    }
    newBurger.setBehaviour();
  });
}
