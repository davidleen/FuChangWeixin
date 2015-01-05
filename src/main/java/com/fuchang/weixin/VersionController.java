package com.fuchang.weixin;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class VersionController {
	@RequestMapping(method = RequestMethod.GET,value = "{targetFile}")
	public String printWelcome(@PathVariable("targetFile") String targetFile) {
		return targetFile;
	}
}