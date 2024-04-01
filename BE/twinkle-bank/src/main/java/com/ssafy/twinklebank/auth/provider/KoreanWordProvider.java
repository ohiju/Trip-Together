package com.ssafy.twinklebank.auth.provider;

import java.io.File;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import com.ssafy.twinklebank.auth.domain.KoreanCode;
import com.ssafy.twinklebank.auth.repository.KoreanCodeRepository;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class KoreanWordProvider {
	ClassPathResource resource = new ClassPathResource("koreanWords.xlsx");
	private final KoreanCodeRepository repository;

	@PostConstruct
	public void init() throws Exception {
		try {
			System.out.println("> file.encoding = " + System.getProperty("file.encoding"));

			File fis = resource.getFile();

			XSSFWorkbook workbook = new XSSFWorkbook(fis);
			XSSFSheet sheet = workbook.getSheetAt(0); // 해당 엑셀파일 시트 수
			int rows = sheet.getPhysicalNumberOfRows(); // 해당 시트의 행의 개수

			for (int rowIndex = 3; rowIndex < rows; rowIndex++) {
				XSSFRow row = sheet.getRow(rowIndex);
				if (row != null) {
					int cells = row.getPhysicalNumberOfCells();
					for (int columnIndex = 0; columnIndex <= 0; columnIndex++) {
						XSSFCell cell = row.getCell(20); // 셀에 담겨있는 값을 읽음
						XSSFCell wordcell = row.getCell(4);
						String value = "";
						if (cell == null)
							continue;
						String word = wordcell.getStringCellValue();
						value = cell.getStringCellValue() + "";

						if (value.contains("명사") && word.length() == 2 && !word.contains("-")) {
							System.out.println(word);
							KoreanCode koreanCode = KoreanCode.builder().code(word).build();
							repository.save(koreanCode);
						}
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
